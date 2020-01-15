import React from 'react';
import MessageForm from '../MessageForm';
import ListMessages from '../ListMessages';

const Chat = props => {
  
  return (
    <div>
      <h1>Chat</h1>
      <ListMessages messages={props.messages} />
      <MessageForm messages={props.messages} setMessages={props.setMessages} />
    </div>
  );
};

export default Chat;
