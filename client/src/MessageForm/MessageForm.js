import React from "react";
import io from 'socket.io-client';


const MessageForm = props => {

  const socket = io('http://localhost:3000');

  const saveMessage = (e) => {
    e.preventDefault();
    socket.emit('message', e.target.msg.value);
    const msgs = props.messages;
    msgs.push(e.target.msg.value);

    props.setMessages(msgs);
    console.log(props.messages);
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
