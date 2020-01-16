const app = require('express')();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 8080;
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

const users = [];

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
      res.sendStatus(200);
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
