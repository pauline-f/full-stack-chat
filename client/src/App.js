import React, { useState } from 'react';
import './App.css';
import MessageForm from './MessageForm'

function App() {

  const [messages, setMessages] = useState([]);
  

  return (
    <div className="App">
      <MessageForm messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
