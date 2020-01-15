import React from 'react';
import MessageForm from '../MessageForm';
import ListMessages from '../ListMessages';

const Chat = ({messages, setMessages, nickname}) => {
  
  return (
    <div>
      <h1>Chat</h1>
      <ListMessages messages={messages} />
      <MessageForm messages={messages} setMessages={setMessages} nickname={nickname} />
    </div>
  );
};

export default Chat;
