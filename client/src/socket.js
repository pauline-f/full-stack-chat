import io from 'socket.io-client';

export let socket = io('localhost:8080');

export const resetSocket = () => {
  socket = io('localhost:8080');
};
