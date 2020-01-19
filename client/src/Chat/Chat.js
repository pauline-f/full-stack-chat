import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import MessageForm from '../MessageForm';
import ListMessages from '../ListMessages';
import UserContext from '../context/UserContext';
import { H1, Wrapper, MessageWrapper } from "./Chat.styles";
import UsersConnected from '../UsersConnected';
import Logout from '../Logout';
import { socket, resetSocket } from '../socket';

const Chat = ({ messages, setMessages, users, setUsers }) => {

  const userContext = useContext(UserContext);

  socket.on('disconnect', () => {
    console.log('Server connection lost');
    resetSocket();
    setMessages([]);
    userContext.setUser(null);
  })

  socket.on('userDisconnect', (data) => {
    setMessages([...messages, data]);
  })

  socket.on('userConnect', (data) => {
    setMessages([...messages, data]);
  })

  return (
    <div>
      {userContext.user ? (
        <Wrapper>
          <UsersConnected users={users} setUsers={setUsers} />
          <MessageWrapper>
            <H1>Chat</H1>
            <ListMessages messages={messages} />
            <MessageForm messages={messages} setMessages={setMessages} />
          </MessageWrapper>
          <Logout setMessages={setMessages} />
        </Wrapper>
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
