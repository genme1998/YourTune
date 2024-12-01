import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlaylisFetcher = ( ) => {
  const playlistId = 'PLirAqAtl_h2pRAtj2DgTa3uWIZ3-0LKTA'; // Your YouTube playlist ID
  const apiKey = 'AIzaSyD6wm5DtB8D0KnbeeMrADQwNl4pl3I7EwQ';  // Your YouTube API key

  
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
          params: {
            part: 'snippet', // Fetch snippet data, which contains title and videoId
            playlistId: playlistId,
            maxResults: 200,  // Limit number of videos (you can change this number)
            key: apiKey,     // Your YouTube API key
          }
        });

        // Extract only video titles and video IDs from the response
        const videoData = response.data.items.map(item => ({
          title: item.snippet.title,
          videoId: item.snippet.resourceId.videoId
        }));

        setVideos(videoData);
      } catch (err) {
        setError('Failed to fetch playlist videos');
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylistVideos();
  }, [playlistId, apiKey]);

  // Render loading, error, or the playlist videos
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Playlist Videos</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <strong>{video.title}</strong>
            <br />
            <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylisFetcher;
