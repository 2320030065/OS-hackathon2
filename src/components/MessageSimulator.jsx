import React, { useState } from 'react';
import ProcessBox from './ProcessBox';

const processStages = [
  'Input Handler',
  'Storage',
  'Network',
  'Message Queue',
  'Receiver'
];

const MessageSimulator = () => {
  const [message, setMessage] = useState('');
  const [pipeline, setPipeline] = useState(Array(processStages.length).fill({ status: 'Waiting', message: '' }));

  const simulateProcess = async () => {
    if (!message.trim()) return;

    const newPipeline = [...pipeline];

    for (let i = 0; i < processStages.length; i++) {
      newPipeline[i] = { status: 'Processing', message };
      setPipeline([...newPipeline]);

      await new Promise(res => setTimeout(res, 1000)); // simulate delay

      newPipeline[i] = { status: 'Done', message };
      setPipeline([...newPipeline]);
    }
  };

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h2>Chat IPC Simulator</h2>
      <input
        type="text"
        value={message}
        placeholder="Type your message..."
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: '10px', width: '300px', fontSize: '16px', marginRight: '10px' }}
      />
      <button onClick={simulateProcess} style={{ padding: '10px 20px', fontSize: '16px' }}>Send</button>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
        {processStages.map((stage, i) => (
          <ProcessBox
            key={i}
            title={stage}
            message={pipeline[i].message}
            status={pipeline[i].status}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageSimulator;
