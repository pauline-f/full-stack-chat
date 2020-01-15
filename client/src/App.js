import React, { useState } from 'react';
import './App.css';
import MessageForm from './MessageForm';
import ListMessages from './ListMessages';

function App() {

  const [messages, setMessages] = useState([]);
  

  return (
    <div className="App">
      <ListMessages messages={messages} />
      <MessageForm messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
