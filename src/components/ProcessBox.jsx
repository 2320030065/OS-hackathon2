import React from 'react';

const ProcessBox = ({ title, message, status }) => {
  const getStatusColor = () => {
    if (status === "Processing") return "#fff59d"; // yellow
    if (status === "Done") return "#a5d6a7"; // green
    return "#eeeeee"; // grey
  };

  return (
    <div style={{
      padding: '15px',
      margin: '10px',
      borderRadius: '10px',
      backgroundColor: getStatusColor(),
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      minWidth: '150px',
      textAlign: 'center'
    }}>
      <h4>{title}</h4>
      <p>{message || '...'}</p>
      <small>{status}</small>
    </div>
  );
};

export default ProcessBox;
