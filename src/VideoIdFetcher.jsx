import React, { useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const VideoIdFetcher = () => {
  const [song, setSong] = useState('');
  const [videoId, setVideoId] = useState('');
  const [error, setError] = useState(null);

  // Function to get the video ID from YouTube search results
  const getVideoIdFromSearch = async (song) => {
    const query = encodeURIComponent(song);
    const url = `https://www.youtube.com/results?search_query=${query}`;

    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      const videoId = $('a#video-title').first().attr('href').split('v=')[1];
      setVideoId(videoId); // Set video ID to state
      setError(null); // Reset error if successful
    } catch (err) {
      setError('Error fetching video ID.');
      console.error('Error scraping video ID:', err);
    }
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (song.trim()) {
      getVideoIdFromSearch(song);
    } else {
      setError('Please enter a song name.');
    }
  };

  return (
    <div className="video-id-fetcher">
      <h1>Fetch YouTube Video ID</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          placeholder="Enter song name"
        />
        <button type="submit">Fetch Video ID</button>
      </form>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {videoId && (
        <div>
          <h2>Video ID:</h2>
          <p>{videoId}</p>
          <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
        </div>
      )}
    </div>
  );
};

export default VideoIdFetcher;
