import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import MessageForm from '../MessageForm';
import ListMessages from '../ListMessages';
import UserContext from '../context/UserContext';
import { H1, Wrapper, MessageWrapper } from "./Chat.styles";
import UsersConnected from '../UsersConnected';

const Chat = ({ messages, setMessages, users, setUsers }) => {

  const userContext = useContext(UserContext);

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
