const app = require('express')();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 8080;

http.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
