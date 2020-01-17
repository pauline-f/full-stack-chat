import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import MessageForm from '../MessageForm';
import ListMessages from '../ListMessages';
import UserContext from '../context/UserContext';

const Chat = ({ messages, setMessages, users, setUsers }) => {

  const userContext = useContext(UserContext);
  console.log('chat', userContext);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.text())
      .then(data => setUsers(data));
  });

  return (
    <div>
      {userContext.user ? (
        <div>
          <h1>Chat</h1>
          <h2>{userContext.user.nickname}</h2>
          <ListMessages messages={messages} />
          <MessageForm messages={messages} setMessages={setMessages} />
          <div>
            <h2>Users connected</h2>
            {users}
          </div>
        </div>
      ) : (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        )}

    </div>
  );
};

export default Chat;
