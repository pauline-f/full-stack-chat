import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from "./Logout.styles";
import { socket, resetSocket } from '../socket';
import UserContext from '../context/UserContext';


const Logout = () => {

  const userContext = useContext(UserContext);

  const logout = () => {
    socket.disconnect();
    resetSocket();
    userContext.setUser(null);
  }

  return (
    <div>
      {
        userContext.user ?
          (
            <div>
              <Button type='submit' value='Logout' onClick={logout} />
            </div>
          ) :
          (
            <Redirect to={{ pathname: '/login' }} />
          )
      }
    </div>
  );
};

export default Logout;
