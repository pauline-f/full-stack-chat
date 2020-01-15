import React, { useState } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Chat from './Chat';
import Login from './Login';
import { UserProvider } from './context/UserContext';

function App() {

  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  console.log('app', user);

  return (
    <UserProvider value={{ user, setUser }}>
      <div className="App">

        <BrowserRouter>
          <Route path='/login' render={() => <Login component={Login} users={users} setUsers={setUsers} />} />
          <Route path='/chat' render={() => <Chat component={Chat} messages={messages} setMessages={setMessages} />} />
        </BrowserRouter>

      </div>
    </UserProvider>
  );
}

export default App;
