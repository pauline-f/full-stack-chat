import React from 'react';
import Message from '../Message';


const ListMessages = props => {
  
  return (
    <div>
      {props.messages.map((message, i) => <Message key={i} message={message} />)}
    </div>
  );
};

export default ListMessages;
