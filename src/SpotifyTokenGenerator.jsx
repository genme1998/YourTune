import React, { useEffect, useState } from 'react';

const CLIENT_ID = 'bf7b561b894c4b89ae551dbd54d5ebb8'; // Replace with your Spotify Client ID
const REDIRECT_URI = 'http://localhost:5174/'; // Replace with your redirect URI
const SCOPES = ['user-read-private', 'user-read-email']; // Adjust scopes as needed

const SpotifyTokenGenerator = () => {
  const [accessToken, setAccessToken] = useState(null);

  // Generate the Spotify login URL
  const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(SCOPES.join(' '))}`;

  // Extract the access token from the URL after redirection
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash
        .substring(1) // Remove the '#' at the beginning
        .split('&') // Split into key-value pairs
        .find((param) => param.startsWith('access_token')) // Find the access_token param
        ?.split('=')[1]; // Extract the value

      if (token) {
        setAccessToken(token);
        window.location.hash = ''; // Clean the URL to avoid leaking the token
      }
    }
  }, []);

  return (
    <div>
      {!accessToken ? (
        <a href={SPOTIFY_AUTH_URL}>Log in with Spotify</a>
      ) : (
        <div>
          <h2>Access Token:</h2>
          <p>{accessToken}</p>
        </div>
      )}
    </div>
  );
};

export default SpotifyTokenGenerator;
