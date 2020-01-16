import React, { useEffect } from "react";
import io from 'socket.io-client';


const MessageForm = ({messages, setMessages, nickname}) => {

  const socket = io('localhost:8080');

  useEffect(() => {
    socket.on('message', msg => {
      setMessages([...messages, msg]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('message', e.target.msg.value);
    console.log(messages);
    e.target.msg.value = '';
  }

  return (
    <div>
      <h4>{nickname}</h4>
      <form onSubmit={sendMessage}>
        <input type='text' name='msg' />
        <input type='submit' value='Send' />
      </form>
    </div>
  );
};

export default MessageForm;
