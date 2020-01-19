const app = require('express')();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 8080;
const CLIENT_SILENT_TIMEOUT = 2 * 60000; // 2 minutes
const io = require('socket.io')(http, {
  pingInterval: 10000,
  pingTimeout: 5000
});

const bodyParser = require('body-parser');

const allUsers = {};

app.use(bodyParser.json());

app.post('/api/user', (req, res) => {
  const nickname = req.body.nickname;
  if (nickname) {
    if (allUsers[nickname]) {
      res.sendStatus(400);
    } else {
      allUsers[nickname] = '';
      res.sendStatus(200);
    }
  } else {
    res.sendStatus(400);
  }
});

const getUserBySocketId = (socketId) => {
  return Object.keys(allUsers).find(key => allUsers[key] === socketId);
}

io.on('connection', socket => {
  let timeoutHandle = null

  const disconnectUser = () => {
    const user = getUserBySocketId(socket.id);
    console.log(`${user} disconnected due to inactivity`);
    socket.disconnect();
  }

  socket.on('disconnect', (reason) => {
    const user = getUserBySocketId(socket.id);
    console.log(`${user} disconnected (${reason})`);
    delete allUsers[user];
    io.emit('userDisconnect', { message: `${user} left the chat` });
    io.emit('users', Object.keys(allUsers));
  });

  socket.on('user', user => {
    allUsers[user] = socket.id;
    console.log(`${user} connected. Id: ${socket.id}`);
    socket.broadcast.emit('userConnect', { message: `${user} joined the chat` });
    io.emit('users', Object.keys(allUsers));
    timeoutHandle = setTimeout(disconnectUser, CLIENT_SILENT_TIMEOUT);
  });

  socket.on('message', msg => {
    console.log(`User: ${socket.id} sent a message`);
    clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(disconnectUser, CLIENT_SILENT_TIMEOUT);
    io.emit('message', { message: msg, user: getUserBySocketId(socket.id) });
  });
});

http.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
