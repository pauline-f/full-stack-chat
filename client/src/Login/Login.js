import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../context/UserContext';
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
          ? (
            <Redirect to={{pathname: '/chat'}} />
          ) : (
            <div>
              <form onSubmit={saveUser}>
                Nickname: <input type='text' name='user' />
                <input type='submit' value='Connect' />
              </form>
              <h5>{error}</h5>
            </div>
          )
      }
    </>
  );
};

export default Login;
