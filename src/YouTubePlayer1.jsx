import React, { useEffect, useRef, useState } from 'react';
import './YouTubePlayer.css';

const YoutubePlayer = ({ playlist }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  // This effect initializes the YouTube iframe API
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: playlist[currentVideoIndex],
        playerVars: {
          autoplay: 1,
          controls: 0,
        },
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      document.body.removeChild(script);
    };
  }, []);

  // This effect updates the video whenever currentVideoIndex changes
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.loadVideoById(playlist[currentVideoIndex]);
      setIsPlaying(true);
    }
  }, [currentVideoIndex]);

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % playlist.length;
      return nextIndex;
    });
  };

  const handlePrevious = () => {
    setCurrentVideoIndex((prevIndex) => {
      const prevIndexWrapped = (prevIndex - 1 + playlist.length) % playlist.length;
      return prevIndexWrapped;
    });
  };

  const handlePausePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="youtube-container">
      <div id="youtube-player" className="youtube-background"></div>
      <div className="overlay">
        <h1>YouTube Playlist Player</h1>

        <div className="controls">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handlePausePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={handleNext}>Next</button>
        </div>

        <h2>Current Playlist</h2>
        <div className="playlist">
          {playlist.slice(0, 6).map((videoId, index) => (
            <div
              key={videoId}
              className={`playlist-item ${index === currentVideoIndex ? 'active' : ''}`}
              onClick={() => setCurrentVideoIndex(index)}
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/default.jpg`}
                alt={`Video ${index + 1}`}
                className="thumbnail"
              />
              <span className="video-title">Video {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubePlayer;
