import React from "react";
import { Input, Button, Form } from "./MessageForm.styles";
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
    <Form onSubmit={sendMessage}>
      <Input type='text' name='msg' placeholder='Type a message' />
      <Button type='submit' value='Send' />
    </Form>
  );
};

export default MessageForm;
