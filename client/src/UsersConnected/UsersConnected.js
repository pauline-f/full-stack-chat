import React, { useContext } from "react";
import { socket } from '../socket';
import UserContext from '../context/UserContext';
import { Wrapper } from "./UsersConnected.styles";

const UsersConnected = ({ users, setUsers }) => {

  const userContext = useContext(UserContext);

  socket.on('users', users => {
    setUsers(users);
  });

  return (
    <Wrapper height={window.innerHeight}>
      Users Connected
      <ul>
        {users.map(user => <li>{user === userContext.user ? `${user} (you)` : user}</li>)}
      </ul>
    </Wrapper>
  );
};

export default UsersConnected;
