import './reactStyle.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import SpotifySearch from './SpotifySearch';

const Dashboard = ({aiMessage1}) => {
  const songTitles = [
    "Sweet Child O' Mine",
    "Imagine",
    "Bohemian Rhapsody",
  ];
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  // Step 1: Create state to hold the AI response
  const [aiResponse, setAiResponse] = useState("pwede pa text dri");

  // Step 2: Create a function to update the state (e.g., simulating a response change)
  const updateResponse = () => {
    
  };

useEffect(() => {
    if (aiMessage1 && aiMessage1.trim() !== "") {
      setAiResponse(aiMessage1); // Update the state only if aiMessage1 is not empty
    }
  }, [aiMessage1]);
  return (
    <div id="overAllDashBoard">
      <div id="tuneDescription">
        <div id='Characteristic'>     
          {/* Step 3: Use state to dynamically render the text */}
          <p id="aiResponse">{aiResponse}</p>
          {/* Add a button or any event handler to update the value */}
        </div>
        <div id='songPlaylist'>
         <SpotifySearch songTitles={songTitles} />
        </div>
       
      </div>
    </div>
  );
};

export default Dashboard;
