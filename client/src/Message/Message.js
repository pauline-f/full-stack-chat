import React from 'react';
import { Wrapper } from "./Message.styles";

const Message = ({ message, user }) => {

  return (
    <Wrapper>
      <h4>{user}:</h4>
      <p>{message}</p>
    </Wrapper>
  );
};

export default Message;
