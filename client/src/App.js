import React, { useState } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Chat from './Chat';
import Login from './Login';

function App() {

  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [nickname, setNickname] = useState(null);

  return (
    <div className="App">

      <BrowserRouter>
        <Route path='/login' render={() => <Login component={Login} users={users} setUsers={setUsers} nickname={nickname} setNickname={setNickname} />}/>
        <Route path='/chat' render={() => <Chat component={Chat} messages={messages} setMessages={setMessages} nickname={nickname} />} />
      </BrowserRouter>

    </div>
  );
}

export default App;
