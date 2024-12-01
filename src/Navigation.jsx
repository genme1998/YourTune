import React, { useState } from 'react';
import './reactStyle.css';
import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";
import logo from './logo.png';


const Navigation = ({messageUpdate, output}) => {
    
  const genAI = new GoogleGenerativeAI("AIzaSyB6L77ZorVx9o9rn7WoqdNORQNsRCBCSrQ");
  
  const onclickHandler = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `based on the ${song}, create` ;
      
      const result = await model.generateContent(prompt);
      const generatedText = await result.response.text(); 
        // Set the parsed output (2D array)
        output(generatedText);
        
              
      const prompt1 = `Based on this song ${song} identify the characteristic of the listener in 3-5 sentences. Make it accurate as possible and relatable. Flatter them and use simple words for better understanding. ` ;
      const result1 = await model.generateContent(prompt1);
      const userCharacteristic = await result1.response.text(); 
      messageUpdate(userCharacteristic);
  
      
    } catch (error) {
      console.error("Error generating content:", error);
    }
    
  };
  
  
  
    // Create a state to hold the value of the input field
    const [song, setSong] = useState('');

    const handleInputChange = async (event) => {
        setSong(event.target.value);
        
    };
   // Function to handle the button click
    const handleButtonClick = () => {
        
        alert(output);
    };
    
    

    return (
        <div id="navigationDiv">
          <img src={logo} id="navigationLogo" />
            <input 
                id="searchBarInput" 
                placeholder="Enter Song" 
                value={song}  // Bind the input value to state
                onChange={handleInputChange} // Handle input changes
            />
            <button id="searchBarButton" onClick={onclickHandler}>Confirm</button>
              
        </div>
    );
};

export default Navigation;
