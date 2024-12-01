import React from 'react';

const Playlist = ({ isLoading, error, songData }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Spotify Track Results</h1>

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
                  <p>Danceability: {song.danceability}</p>
                  <p>Energy: {song.energy}</p>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

// Styles for a playlist-like design
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    width: '80%',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  playlist: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
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
  },
  thumbnailContainer: {
    marginRight: '15px',
  },
  thumbnail: {
    width: '80px',
    height: '80px',
    borderRadius: '8px',
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  artist: {
    fontSize: '14px',
    color: '#666',
  },
};

export default Playlist;
