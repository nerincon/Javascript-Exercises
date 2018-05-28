const express = require('express');
const nunjucks = require('nunjucks');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
});



app.use('/socket-io',
  express.static('node_modules/socket.io-client/dist'));

app.get('/', function (req, res) {
  res.render('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});


http.listen(8080, function () {
  console.log('Listening on port 8080');
});