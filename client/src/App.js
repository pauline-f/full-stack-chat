import React, { useState } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Chat from './Chat';
import Login from './Login';

function App() {

  const [messages, setMessages] = useState([]);


  return (
    <div className="App">      

      <BrowserRouter>
        <Route path='/login' render={() => <Login component={Login} />} />
        <Route path='/chat' render={() => <Chat component={Chat} messages={messages} setMessages={setMessages} />} />
      </BrowserRouter>

    </div>
  );
}

export default App;
