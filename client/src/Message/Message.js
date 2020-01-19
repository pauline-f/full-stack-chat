import React, { useContext } from 'react';
import { Wrapper, Username } from "./Message.styles";
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
            {user ? <Username>{user}:</Username> : null}
            <p>{message}</p>
          </div>
        )}

    </Wrapper>
  );
};

export default Message;
