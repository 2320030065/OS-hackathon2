import React from 'react';
import './ChatAppCard.css';

const ChatAppCard = () => {
  return (
    <div className="card">
      <h2>Chat Applications</h2>
      <div className="section">
        <strong>Application:</strong>
        <p>
          Applications like WhatsApp or Slack use IPC mechanisms for message exchange
          between processes handling user input, storage, and network communication.
        </p>
      </div>
      <div className="section">
        <strong>Solution:</strong>
        <p>
          Implement message queues or shared memory for efficient data sharing between processes.
        </p>
      </div>
    </div>
  );
};

export default ChatAppCard;
