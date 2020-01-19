const app = require('express')();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 8080;
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

io.on('connection', socket => {
  socket.on('disconnect', function () {
    const user = Object.keys(allUsers).find(key => allUsers[key] === socket.id);
    console.log(`${user} disconnected`);
    delete allUsers[user];
    io.emit('userDisconnect', {message: `${user} left the chat`});
    io.emit('users', Object.keys(allUsers));
  });

  socket.on('user', user => {
    allUsers[user] = socket.id;
    console.log(`${user} connected. Id: ${socket.id}`);
    socket.broadcast.emit('userConnect', {message: `${user} joined the chat`});
    io.emit('users', Object.keys(allUsers));
  });

  socket.on('message', msg => {
    console.log(`User: ${socket.id} sent a message`);
    io.emit('message', {message: msg, user: Object.keys(allUsers).find(key => allUsers[key] === socket.id)});
  });
});

http.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
