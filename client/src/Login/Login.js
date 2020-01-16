import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { addUser } from '../api';

const Login = ({ users, setUsers }) => {

  const [isLog, setIsLog] = useState(false);
  const [error, setError] = useState('');
  const userContext = useContext(UserContext);

  const saveUser = async e => {
    e.preventDefault();
    e.persist();

    try {
      const result = await addUser({ nickname: e.target.user.value, isLogged: true });
      if (result.status === 200) {
        userContext.setUser({ nickname: e.target.user.value, isLogged: true });
        setIsLog(true);
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
    console.log('login', userContext.user);
  }

  return (
    <>
      {
        isLog
          ? (
            <Redirect
              to={{
                pathname: '/chat',
                state: { nickname: userContext.user.nickname }
              }}
            />
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
