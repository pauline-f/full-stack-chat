import React, { useContext } from 'react';
import { Wrapper } from "./Message.styles";
import UserContext from '../context/UserContext';

const Message = ({ message, user }) => {

  const userContext = useContext(UserContext);

  return (
    <Wrapper alignRight={user === userContext.user ? true : false}>
      {user === userContext.user ? (
        <div>
          <p>{message}</p>
        </div>
      ) : (
          <div>
            <h4>{user}:</h4>
            <p>{message}</p>
          </div>
        )}

    </Wrapper>
  );
};

export default Message;
