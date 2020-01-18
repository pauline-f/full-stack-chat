import React from "react";
import { socket } from '../socket';

const MessageForm = ({ messages, setMessages }) => {

  socket.on('message', data => {
    setMessages([...messages, data]);
  });

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('message', e.target.msg.value);
    e.target.msg.value = '';
  }

  return (
    <form onSubmit={sendMessage}>
      <input type='text' name='msg' />
      <input type='submit' value='Send' />
    </form>
  );
};

export default MessageForm;
