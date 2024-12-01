import './reactStyle.css';
import React from 'react';

const PlaylistButtons = ({searched , respo}) => {
  const playlists =  [   
    /*["dQw4w9WgXcQ", "3JZ_D3ELwOQ", "Zi_XLOBDo_Y", "kJQP7kiw5Fk", "oRdxUFDoQe0", "9bZkp7q19f0", "e-ORhEE9VVg", "2Vv-BfVoq4g", "CevxZvSJLk8", "OPf0YbXqDm0"], // Playlist 1
    ["QwZT7T-TXT0", "lYps4q1ba5I", "yCkV6le5t4M", "kE8DHT5lO2I", "8Ebqe2Dbzls", "pFQZgn4q36E", "HG7Xa_XM8OQ", "Dz1H61oOrXY", "A7PBqvD6zMI", "nJ64tOB5fFw"], // Playlist 2
    ["YT2YMOH5BXI", "jZZMkNOjREY", "oDUr5Z_zYX8", "8Ebqe2Dbzls", "iYcVnHe4acg", "mOeh5md09I4", "S1nDwx34nsY", "fuQwz2PH6YI", "qZT1gckNx7Y", "GH-Y5tbxeww"], // Playlist 3
    ["ksqzVr0A3gA", "fXOe29oT6dI", "5mmJr1w3FfI", "V2aQkZY56To", "MwX9tnJlvOw", "sbFLrMP8Mr4", "HZfQICFT-K8", "OPf8KmCXQIE", "g0b0v3kK2lw", "8Ebqe2Dbzls"]  // Playlist 4 */
  ];
  
  const handleButtonClick = () => {
        alert(output);
        };
       
  const fetchVideoId = async (song) => {
  const apiKey = 'AIzaSyBSaEdXUnbtbQ3n8sIWIgDpvkYsiqqmYwA'; 
  const query = encodeURIComponent(song);
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}`;
 
  try {
    const response = await axios.get(url);
    if (response.data.items.length > 0) {
      const videoId = response.data.items[0].id.videoId;
      playlists.push(videoId);
      
    } else {
      alert('No video found');
    }
  } catch (error) {
    alert("Error fetching video ID:", error);
  }
};
  
  for (let counter =0; counter<searched.length; counter++) {
  fetchVideoId(searched[counter]);
  }
  
  
  return (
    <div id="playlistButtonsDiv">
       <button >Midday Groove</button>
       
    </div>
    
    
  );
};

export default PlaylistButtons;
