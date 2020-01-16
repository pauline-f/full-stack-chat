import React, { useContext, useEffect } from 'react';
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
      <h1>Chat</h1>
      {userContext.user.nickname}
      <ListMessages messages={messages} />
      <MessageForm messages={messages} setMessages={setMessages} />
      <div>
        <h2>Connected people</h2>
        {users}
      </div>
    </div>
  );
};

export default Chat;
