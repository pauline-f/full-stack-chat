import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Input, Button, Form, Wrapper, H4 } from "./Login.styles";
import { addUser } from '../api';
import { socket } from '../socket';

const Login = () => {

  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState('');
  const userContext = useContext(UserContext);

  const saveUser = async e => {
    e.preventDefault();
    e.persist();

    try {
      const result = await addUser({ nickname: e.target.user.value });
      if (result.status === 200) {
        socket.emit('user', e.target.user.value);
        userContext.setUser(e.target.user.value);
        setIsLogged(true);
        console.log('Success, the user is connected');
      } else {
        if (result.status === 400) {
          setError('This nickname is not valid');
          e.target.user.value = '';
          console.log('Error, the nickname is not valid');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      {
        isLogged
          ? (<Redirect to={{ pathname: '/chat' }} />) : (
            <Wrapper>
              <h1>Chat application</h1>
              <Form onSubmit={saveUser}>
                <Input type='text' name='user' placeholder='Your nickname' />
                <Button type='submit' value='Connect' />
              </Form>
              <H4>{error}</H4>
            </Wrapper>
          )
      }
    </>
  );
};

export default Login;
