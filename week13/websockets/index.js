const express = require('express');
const nunjucks = require('nunjucks');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var users = [];
var connections = [];


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
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  //Send Message
  socket.on('send message', function(data){
    console.log('message: ' + data);
    io.emit('new message', {msg: data, user: socket.username});
  });

  //New User
  socket.on('new user', function(data, callback){
    callback(true);
    socket.username = data;
    users.push(socket.username);
    updateUsernames();
  });

  //Disconnect
  socket.on('disconnect', function(){
    if(!socket.username){return}
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });
});

function updateUsernames() {
  io.emit('get users', users);
}

http.listen(8080, function () {
  console.log('Listening on port 8080');
});