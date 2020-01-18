import React, { useContext } from "react";
import { socket } from '../socket';
import UserContext from '../context/UserContext';


const UsersConnected = ({ users, setUsers }) => {

  const userContext = useContext(UserContext);

  socket.on('users', users => {
    console.log(users);
    setUsers(users);
  });

  console.log(userContext.user)

  return (
    <div>
      Users Connected
      <ul>
        {users.map(user => <li>{user === userContext.user ? `${user} (you)` : user}</li>)}
      </ul>
    </div>
  );
};

export default UsersConnected;
