import React, { useEffect } from "react";
import { socket } from '../socket';


const UsersConnected = ({ users, setUsers }) => {

  socket.on('users', users => {
    console.log(users);
    setUsers(users);
  });

  return (
    <div>
      Users Connected
      <ul>
        {users.map(user => <li>{user}</li>)}
      </ul>
    </div>
  );
};

export default UsersConnected;
