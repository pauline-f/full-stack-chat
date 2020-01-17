const app = require('express')();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 8080;
const io = require('socket.io')(http, {
  pingInterval: 10000,
  pingTimeout: 5000
});

const bodyParser = require('body-parser');

const users = [];
const allUsers = {};

app.use(bodyParser.json());

app.post('/api/user', (req, res) => {
  const nickname = req.body.nickname;
  console.log(nickname);
  if (nickname) {
    if (users.includes(nickname)) {
      res.sendStatus(400);
    }
    else {
      users.push(nickname);
      res.status(200).send(users);
    }
  } else {
    res.sendStatus(400);
  }
  console.log(users);
});

app.get('/api/user', (req, res) => {
  res.send(users);
});

io.on('connection', socket => {

  socket.on('disconnect', function () {
    const searchNickname = (element) => element === allUsers[socket.id];
    if (users.findIndex(searchNickname) >= 0) {
      users.splice(users.findIndex(searchNickname), 1);
    }
    console.log(`${allUsers[socket.id]} disconnected`);
  });

  socket.on('user', user => {
    allUsers[socket.id] = user;
    console.log(`${user} connected. Id: ${socket.id}`);
    socket.emit('user', user);
  });

  socket.on('message', msg => {
    console.log(`User: ${socket.id} sent a message`);
    io.emit('message', msg);
  });
});

http.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
