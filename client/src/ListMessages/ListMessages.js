import React from 'react';
import Message from '../Message';


const ListMessages = ({ messages }) => {
  return (
    <div>
      {messages.map((message, i) => <Message key={i} message={message.message} user={message.user} />)}
    </div>
  );
};

export default ListMessages;
