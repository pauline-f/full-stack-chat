import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../context/UserContext';


const Login = ({ users, setUsers }) => {

  const [isLog, setIsLog] = useState(false);
  const userContext = useContext(UserContext);

  const saveUser = e => {
    let usersList = users;
    usersList.push(e.target.user.value);
    userContext.setUser({ nickname: e.target.user.value, isLogged: true });
    setUsers(usersList);
    setIsLog(true);
    console.log('login', userContext.nickname);
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
            <form onSubmit={saveUser}>
              Nickname: <input type='text' name='user' />
              <input type='submit' value='Connect' />
            </form>
          )
      }
    </>
  );
};

export default Login;
