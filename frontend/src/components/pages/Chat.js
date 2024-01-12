import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chat.css'; // Stil dosyanızın adını ve yolu buraya ekleyin

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    try {
      // Kullanıcının mesajını ekleyin
      const userMessage = { text: input, user: 'user' };
      setMessages([...messages, userMessage]);
      setInput('');

      // OpenAI API'ye istek gönderin
      const response = await axios.post(
        'API_ENDPOINT', // OpenAI API endpointi buraya gelecek
        {
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            userMessage,
            ...messages,
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY`, // OpenAI API anahtarınız buraya gelecek
          },
        }
      );

      // AI'nin yanıtını ekleyin
      const aiMessage = { text: response.data.choices[0].message.content, user: 'ai' };
      setMessages([...messages, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
