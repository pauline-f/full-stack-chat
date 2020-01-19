
# Fullstack chat application (React, Node.js, Socket.io)

### Demo:  [https://murmuring-everglades-45773.herokuapp.com/](https://murmuring-everglades-45773.herokuapp.com/)

This project is a chatroom web application which allows multiple users to send and receive messages.
  
A user can login with a nickname. When he is logged in, he can send and receive messages. 
A list shows who is connected (this list is updated when someone joins or leaves the chatroom). 
The user can logout.
He can't use a nickname which is already taken.

If the user is inactive (he doesn't send any message), he is disconnected and a message is send to the other users.


### How it works

For the client, I used: 
- React
- Socket.io-client
- Styled-components
- React-router-dom

 For the server, I used: 
- Node.js
- Express
- Socket.io
  

## How to use

Both client and server need to be started to run in development mode:

### `cd client && npm start`
### `cd server && npm start`


Open [http://localhost:3000](http://localhost:3000) to open the application in the browser.