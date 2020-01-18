import React from 'react';
import Message from '../Message';
import { Wrapper } from "./ListMessages.styles";


const ListMessages = ({ messages }) => {
  return (
    <Wrapper>
      {messages.map((message, i) => <Message key={i} message={message.message} user={message.user} />)}
    </Wrapper>
  );
};

export default ListMessages;
