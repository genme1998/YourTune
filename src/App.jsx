// src/App.js
import { useState } from 'react';
import React from 'react';
import Navigation from './Navigation'; 
import DivHolder from './DivHolder';
import PlaylistButtons from './PlaylistButtons';
import  MyComponent from './MyComponent';
import YouTubeVideoSearch from './YouTubeVideoSearch';
import YouTubePlayer2 from './SpotifyTokenGenerator';
import SpotifyTokenGenerator from './SpotifyTokenGenerator';
import SpotifySearch from './SpotifySearch';

function App() {
  const [aiMessage, setAiMessage] = useState(""); // State managed in parent
  const updateAiMessage = (newMessage) => {
    setAiMessage(newMessage); // Update the state based on Child A's input
  };
  const [outputMessage, setOutputMessage] = useState(""); // State managed in parent
  const updateoutputMessage = (newMessage) => {
    setOutputMessage(newMessage); // Update the state based on Child A's input
  };
  const [randomNum, setRandomNum] = useState(""); // State managed in parent
  const updateRandomNum = (newMessage) => {
    setRandomNum(newMessage); // Update the state based on Child A's input
  };
  const [vidId, setVidId] = useState(""); // State managed in parent
  const updateVidId = (newMessage) => {
    setVidId(newMessage); // Update the state based on Child A's input
  };
  const [vidTitles, setVidTitles] = useState(""); // State managed in parent
  const updateVidTitles = (newMessage) => {
    setVidTitles(newMessage); // Update the state based on Child A's input
  };

  /*
  <Navigation messageUpdate = {updateAiMessage} />
       <DivHolder aiMessage1={aiMessage}/>
       <PlaylistButtons searched = {aiMessage}/>
       <Navigation messageUpdate = {updateAiMessage} output={updateoutputMessage} />       
    <DivHolder aiMessage1={outputMessage}/>
       
  */

    const songTitles = [
      "Sweet Child O' Mine",
      "Imagine",
      "Bohemian Rhapsody",
    ];
    
  const readMessage = () => {
    alert(aiMessage);
  }
  let c=1;
  
  return (
    
    <div className="App">
      <Navigation messageUpdate = {updateAiMessage} output={updateoutputMessage} /> 
      <SpotifyTokenGenerator />
      <DivHolder aiMessage1={outputMessage }/>
      
      
      
    
    </div>
  );
}

export default App;