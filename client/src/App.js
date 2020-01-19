import React, { useState } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Chat from './Chat';
import Login from './Login';
import { UserProvider } from './context/UserContext';

function App() {

  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <UserProvider value={{ user, setUser }}>
      <div className="App">

        <BrowserRouter>
          <Route exact path='/' render={() => <Login component={Login} />} />
          <Route exact path='/login' render={() => <Login component={Login} />} />
          <Route exact path='/chat' render={() => <Chat component={Chat} messages={messages} setMessages={setMessages} users={users} setUsers={setUsers} />} />
        </BrowserRouter>

      </div>
    </UserProvider>
  );
}

export default App;
