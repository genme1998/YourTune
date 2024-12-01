import React, { useEffect, useState } from "react";

const SpotifySearch = ({ songTitles , exportSong }) => {
  const accessToken = "BQBO8d2mlxzKgeoYTYXbp9eGwumWL32mmrtFG6VPUXFEhtKK5mAhblEKpDsOs62Vn4-h8mI7i9-xl2BV1YqC-oSlNkP1NRh7Dr707_BB6B-AHu-YjTDYXE14GJ8TjfIw42MR4pLqgUkDYzjGIUyiXu2CkkwPVjm1dROl322jqRww7f5T-MkpmCJ8GTFJb5HKrBIGLAgZqmzbfk5HyX9HHrk"; // Replace with your Spotify Access Token
  const [songData, setSongData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!songTitles || songTitles.length === 0) {
      setError("No song titles provided.");
      return;
    }

    const fetchSongs = async () => {
      setIsLoading(true);
      setError(null);
      const results = [];

      for (const title of songTitles) {
        try {
          const response = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(
              title
            )}&type=track&limit=1`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
          }

          const data = await response.json();
          if (data.tracks.items.length > 0) {
            const track = data.tracks.items[0];

            // Fetch additional track data (popularity and audio features)
            const trackId = track.id;
            const trackDetailsResponse = await fetch(
              `https://api.spotify.com/v1/tracks/${trackId}`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
            const trackDetails = await trackDetailsResponse.json();

            // Fetch audio features
            const audioFeaturesResponse = await fetch(
              `https://api.spotify.com/v1/audio-features/${trackId}`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
            const audioFeatures = await audioFeaturesResponse.json();

            results.push({
              title: track.name,
              artist: track.artists[0].name,
              thumbnail: track.album.images[0].url,
              popularity: trackDetails.popularity,
              duration_ms: trackDetails.duration_ms,
              danceability: audioFeatures.danceability,
              energy: audioFeatures.energy,
            });
          } else {
            results.push({ title, error: "No results found." });
          }
        } catch (err) {
          console.error(err);
          results.push({ title, error: "Error fetching data." });
        }
      }

      setSongData(results);
      setIsLoading(false);
    };

    fetchSongs();
  }, [songTitles, accessToken]);

  return (
    <div>
    <h1 style={styles.heading}>YourTune</h1>

    {isLoading && <p>Loading...</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}

    {!isLoading && songData.length > 0 && (
      <div style={styles.playlist}>
        {songData.map((song, index) => (
          song.error ? (
            <p key={index} style={{ color: "red" }}>
              {song.title}: {song.error}
            </p>
          ) : (
            <div key={index} style={styles.songItem}>
              <div style={styles.thumbnailContainer}>
                <img
                  src={song.thumbnail}
                  alt={`${song.title} Album Cover`}
                  style={styles.thumbnail}
                />
              </div>
              <div style={styles.songInfo}>
                <p style={styles.songTitle}>{song.title}</p>
                <p style={styles.artist}>Artist: {song.artist}</p>
                <p>Popularity: {song.popularity}</p>
                <p>
                  Duration: {Math.floor(song.duration_ms / 60000)}:
                  {((song.duration_ms % 60000) / 1000).toFixed(0).padStart(2, "0")} minutes
                </p>
                
              </div>
            </div>
          )
        ))}
      </div>
    )}
  </div>
  );
};
const styles = {
  container: {
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    width: '100%',
    justifyContent: 'center',  // Changed to camelCase
    alignItems: 'center', 
    overflow: 'hidden',
  },

  heading: {
    marginLeft: '110px',
    textAlign: 'center',
    color: '#1DB954',
    marginBottom: '10px',
  },
  songItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
    overflow: 'hidden',
    background: 'linear-gradient(90deg, #191414, #0f0f0f)',
    width: '500px',
    marginLeft : '10%',
    height: '170px'
  },
  thumbnailContainer: {
    marginRight: '15px',
  },
  thumbnail: {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
  },
  songInfo: {
    flex: 1,
    fontSize: '11px',
    color: '#FFFFFF',
  },
  songTitle: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#1DB954',
  
  },
  artist: {
    fontSize: '20px',
   color: '#14532D'
    
  },
};

export default SpotifySearch;
