import React from 'react';
import { Redirect } from 'react-router-dom';


const Login = ({ users, setUsers, nickname, setNickname }) => {

  const saveUser = e => {
    let usersList = users;
    usersList.push(e.target.user.value);
    setNickname(e.target.user.value);
    setUsers(usersList);
  }

  return (
    <>
      {
        nickname
          ? (
            <Redirect
              to={{
                pathname: '/chat',
                state: { nickname: nickname }
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
