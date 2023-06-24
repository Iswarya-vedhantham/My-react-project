import React, { useState } from 'react';
import './App.css';
const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes}`;
};


const user_list = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin'];

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      username: randomUser,
      content: message,
      likes: 0,
      time: getCurrentTime(), // Add the time property here
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };
  const handleLikeMessage = (index) => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages[index].likes++;
      return updatedMessages;
    });
  };

  return (
    <div className="App">
      <div className="chat-container">
  {messages.map((msg, index) => (
    <div className="message" key={index}>
      <div className="user-info">
        <div className={`profile-logo ${msg.username.toLowerCase()}`}>
          {msg.username.charAt(0).toUpperCase()}
        </div>
        <div className="user-details">
          <div className="username">{msg.username}</div>
          <div className="time">{msg.time}</div>
        </div>
      </div>
      <div className="message-box">
        <div className="message-content">{msg.content}</div>
        <button className="like-button" onClick={() => handleLikeMessage(index)}>
          Like ({msg.likes})
        </button>
      </div>
    </div>
  ))}
</div>
      <div className="input-container">
        <input
          type="text"
          className="message-input"
          value={message}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;