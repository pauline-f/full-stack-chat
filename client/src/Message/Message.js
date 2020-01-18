import React from 'react';


const Message = ({ message, user }) => {

  return (
    <div>
      <p>{user}: {message}</p>
    </div>
  );
};

export default Message;
