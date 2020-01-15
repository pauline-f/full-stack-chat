import React, { useContext } from 'react';
import MessageForm from '../MessageForm';
import ListMessages from '../ListMessages';
import UserContext from '../context/UserContext';

const Chat = ({messages, setMessages}) => {
  
  const userContext = useContext(UserContext);
  console.log('chat', userContext);

  return (
    <div>
      <h1>Chat</h1>
      {userContext.user.nickname}
      <ListMessages messages={messages} />
      <MessageForm messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default Chat;
