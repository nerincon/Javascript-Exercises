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
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(8080, function () {
  console.log('Listening on port 8080');
});