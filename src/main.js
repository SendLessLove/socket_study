var socket = io('ws://localhost:7777/');

function send() {
  var txt = document.getElementById('sendTxt');
  if (txt) {
    socket.emit('message', txt.value)
    txt.value = '';
  }
}

function showMessage(type, msg) {
  var messageBox = document.createElement('div');
  messageBox.innerHTML = msg;
  if (type == 'enter') {
    messageBox.style.color = 'blue';
  } else if (type == 'leave') {
    messageBox.style.color = 'red';
  }
  document.body.appendChild(messageBox);
}

socket.on('enter', function(str) {
  showMessage('enter', str)
})
socket.on('message', function(str) {
  showMessage('message', str)
})
socket.on('leave', function(str) {
  showMessage('leave', str)
})