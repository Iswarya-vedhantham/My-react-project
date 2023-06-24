import React, { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    onSend(message);
    setMessage('');
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;
