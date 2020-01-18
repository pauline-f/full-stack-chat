import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import MessageForm from '../MessageForm';
import ListMessages from '../ListMessages';
import UserContext from '../context/UserContext';
import UsersConnected from '../UsersConnected';

const Chat = ({ messages, setMessages, users, setUsers }) => {

  const userContext = useContext(UserContext);

  return (
    <div>
      {userContext.user ? (
        <div>
          <h1>Chat</h1>
          <h2>{userContext.user.nickname}</h2>
          <ListMessages messages={messages} />
          <MessageForm messages={messages} setMessages={setMessages} />
          <UsersConnected users={users} setUsers={setUsers} />
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
