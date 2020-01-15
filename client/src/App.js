import React, { useState } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import MessageForm from './MessageForm';
import ListMessages from './ListMessages';
import Login from './Login';

function App() {

  const [messages, setMessages] = useState([]);


  return (
    <div className="App">
      <ListMessages messages={messages} />
      <MessageForm messages={messages} setMessages={setMessages} />

      <BrowserRouter>
        <Route path='/login' render={() => <Login component={Login} />} />
      </BrowserRouter>

    </div>
  );
}

export default App;
