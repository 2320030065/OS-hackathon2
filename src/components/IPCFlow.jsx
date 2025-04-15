import React from 'react';
import './IPCFlow.css';

const IPCFlow = () => {
  return (
    <div className="ipc-container">
      <h3>IPC Flow in a Chat App</h3>
      <div className="ipc-flow">
        <div className="ipc-box">User Input</div>
        <div className="arrow">→</div>
        <div className="ipc-box">Storage</div>
        <div className="arrow">→</div>
        <div className="ipc-box">Network</div>
        <div className="arrow">→</div>
        <div className="ipc-box">Message Queue</div>
      </div>
    </div>
  );
};

export default IPCFlow;
