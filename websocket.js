var app = require('http').createServer();
var io = require('socket.io')(app)

var PORT = '7777'
app.listen(PORT);

var clientCount = 0

io.on('connection', function (socket) {
  clientCount++
  socket.nickname = '游客' + clientCount;
  io.emit('enter', socket.nickname + 'come in');
  
  socket.on('message', function (data) {
    io.emit('message', socket.nickname + ': ' + data);
  });

  socket.on('disconnect', function () {
  	io.emit('leave', socket.nickname + 'leave');
  })
});

console.log("websocket listening on port " + PORT);