import './reactStyle.css';
import React from 'react';
import YoutubePlayer from './YoutubePlayer';

import axios from 'axios';


const Playlist = ({playlists , titles}) => {
  const songs = ["Bruno Mars Grenade", "Frank Senatra My Way", "Boyonce Single Ladies" ]
  

//return Logic
  if (playlists.length === 0) {
   
    return (
      <div id="playlistDiv">
        <h1 id= "hi">No videos yet</h1>
        
        
      </div>
    );
  }
const playlists1 = 
    [ "MwX9tnJlvOw", "sbFLrMP8Mr4", 
    "HZfQICFT-K8", "QqtzoQ3fcqw", "YxtJAyukLGg", "mO3GKTcgwCs"]  // Playlist 
  return (
    <div id="playlistDiv">
      
    <YoutubePlayer playlist ={playlists} titles={titles} />
    </div>
  );
};
export default Playlist;


