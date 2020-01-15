import React from 'react';

const UserContext = React.createContext({ nickname: null, isLogged: false });

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;