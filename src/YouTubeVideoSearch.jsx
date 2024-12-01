import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY_YOUTUBE = 'AIzaSyD6wm5DtB8D0KnbeeMrADQwNl4pl3I7EwQ'; // Your YouTube Data API Key

const YouTubeVideoSearch = ({ songList, vidId }) => {
  const [loading, setLoading] = useState(false); // Loading state for API request
  const [buttonClicked, setButtonClicked] = useState(false); // Track button click
  const [error, setError] = useState(null); // Error handling state
  const [displayResults, setDisplayResults] = useState(""); // Display results as text

  // Function to search for a song on YouTube and get the video ID
  const searchYouTube = async (song) => {
    try {
      let encodedSong = encodeURIComponent(song); // Encode the song title to handle special characters
      
      let response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: encodedSong, // The song title
          type: 'video', // Search for videos only
          key: API_KEY_YOUTUBE,
          maxResults: 50, 
          order: 'relevance'  // Get the top 5 results to compare
        },
        
      });
     alert(response.data.items.length);
      // If no video found, try again with "official music video" appended
      if (response.data.items.length === 0) {
        encodedSong = encodeURIComponent(song + "  (Official Music Video)");
        response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: encodedSong, // The song title with "official music video"
            type: 'video', // Search for videos only
            key: API_KEY_YOUTUBE,
            maxResults: 5, // Get the top 5 results to compare
          },
        });
      }

      // If we get results, fetch the video ID of the most viewed video
      if (response.data.items.length > 0) {
        const videoId = response.data.items[0].id.videoId; // Get the video ID of the first result
        return videoId;
      }

      return null;
    } catch (error) {
      console.error('Error fetching YouTube data:', error); // Log the error for debugging
      if (error.response) {
        // API-specific errors
        setError(`API error: ${error.response.data.error.message}`);
      } else if (error.request) {
        // Network or request issues
        setError('Network error: No response from the server');
      } else {
        // Other errors (like misconfigured axios or other internal errors)
        setError(`Error: ${error.message}`);
      }
      return null;
    }
  };

  // Function to search for all songs in the list
  const searchAllSongs = async () => {
    setLoading(true);
    const videoIdsArray = [];

    try {
      // Split the songList string into an array by comma or any other separator
      const songs = songList.split(',').map(song => song.trim()); // Split and trim spaces
        
      // Loop through the list of songs and search for each song on YouTube
      for (let song of songs) {
        
        const videoId = await searchYouTube(song); // Get video ID for the current song
        if (videoId) {
          videoIdsArray.push(videoId); // Add the video ID to the array
        }
      }

      // Update state with the array of video IDs
      vidId(videoIdsArray);

      // Prepare display results as text
      if (videoIdsArray.length > 0) {
        const resultText = videoIdsArray.join("\n"); // Join video IDs with new lines
        setDisplayResults(resultText);
      } else {
        setDisplayResults("No videos found for the provided songs.");
      }
    } catch (error) {
      setError('Error searching for songs');
      console.error('Error searching for songs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Call searchAllSongs when the component mounts or when songList prop changes
  useEffect(() => {
    if (songList && songList.length > 0 && buttonClicked) {
      searchAllSongs();
    }
  }, [songList, buttonClicked]); // Dependency on songList and buttonClicked state

  // Function to handle button click and trigger the search
  const handleButtonClick = () => {
    setButtonClicked(true); // Set buttonClicked to true to start the search
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Search Songs</button>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}
          {displayResults ? (
            <pre>{displayResults}</pre> // Displaying video IDs as text
          ) : (
            <p>No videos found for the provided songs.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default YouTubeVideoSearch;




