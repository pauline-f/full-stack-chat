import React, { useEffect } from "react";
import io from 'socket.io-client';


const MessageForm = props => {

  const socket = io('localhost:8080');

  useEffect(() => {
    socket.on('message', msg => {
      props.setMessages([msg, ...props.messages]);
    });
  }, [props.messages])


  const saveMessage = (e) => {
    e.preventDefault();
    socket.emit('message', e.target.msg.value);
    console.log(props.messages);
    e.target.msg.value = '';
  }

  return (
    <div>
      <form onSubmit={saveMessage}>
        <input type='text' name='msg' />
        <input type='submit' value='Send' />
      </form>
    </div>
  );
};

export default MessageForm;
