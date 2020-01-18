import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import MessageForm from '../MessageForm';
import ListMessages from '../ListMessages';
import UserContext from '../context/UserContext';

const Chat = ({ messages, setMessages }) => {

  const userContext = useContext(UserContext);

  return (
    <div>
      {userContext.user ? (
        <div>
          <h1>Chat</h1>
          <h2>{userContext.user.nickname}</h2>
          <ListMessages messages={messages} />
          <MessageForm messages={messages} setMessages={setMessages} />
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
