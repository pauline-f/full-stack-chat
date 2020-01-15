const app = require('express')();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 8080;
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('message', msg => {
    io.emit('message', msg);
  });
});

http.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
