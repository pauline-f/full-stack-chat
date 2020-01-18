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
    console.log(`${allUsers[socket.id]} disconnected`);
  });

  socket.on('user', user => {
    allUsers[user] = socket.id;
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
