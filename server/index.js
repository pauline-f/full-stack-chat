const app = require('express')();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 8080;
const io = require('socket.io')(http);

http.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
