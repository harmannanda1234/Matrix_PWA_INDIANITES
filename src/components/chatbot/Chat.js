import React, { useState } from 'react';
import axios from 'axios';
import './chat.css'; // CSS for styling
import Hero from '../Hero/Hero';
// import  './static'

const Chat = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    if (!userMessage) return;

    // Add user's message to chat history
    setChatHistory([...chatHistory, { sender: 'user', text: userMessage }]);

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo', // Use the latest model if available
        messages: [{ role: 'user', content: userMessage }],
        max_tokens: 150,
        temperature: 0.7,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      const botMessage = response.data.choices[0].message.content;

      // Add bot's response to chat history
      setChatHistory([...chatHistory, { sender: 'bot', text: botMessage }]);

    } catch (error) {
      console.error('Error fetching response from OpenAI:', error);
      setChatHistory([...chatHistory, { sender: 'bot', text: 'Sorry, something went wrong.' }]);
    }

    // Clear the input field
    setUserMessage('');
  };

  return (
  
    <div className="chat-container">
      <h1 id='head'>mitrAI</h1>
      <div className="chat-box">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`chat-message ${chat.sender}`}>
            {chat.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="NAMASTE FROM mitrAI..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button ><a href="/api/chat">GO</a></button>
      </div>
    </div>
    
  );

  
};

export default Chat;
