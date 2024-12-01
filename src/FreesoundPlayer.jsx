import React, { useEffect, useRef, useState } from 'react';

const YoutubePlayer = ({ videoId }) => {
  const playerRef = useRef(null); // Reference to store the YouTube player instance

  useEffect(() => {
    // Load the YouTube API script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.body.appendChild(script);

    // YouTube API ready callback
    window.onYouTubeIframeAPIReady = () => {
      if (playerRef.current) {
        playerRef.current.destroy(); // Destroy the existing player instance
      }
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '390',
        width: '640',
        videoId, // Use the new video ID here
        playerVars: {
          autoplay: 1,
          controls: 0,
        },
      });
    };

    // Cleanup logic when the component unmounts
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy(); // Destroy the player instance on cleanup
      }
    };
  }, [videoId]); // Dependency array ensures the effect re-runs when videoId changes

  return <div id="youtube-player"></div>;
};

export default YoutubePlayer;
