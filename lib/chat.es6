"use strict";
import User from "./models/user";
let socket = io();

function submitfunction() {
  let from = $('#user').val(),
    message = $('#m').val();
  if(message != '') {
    socket.emit('chatMessage', from, message);
  }
  $('#m').val('').focus();
  return false;
}

function notifyTyping() {
  let user = $('#user').val();
  socket.emit('notifyUser', user);
}

socket.on('chatMessage', (from, msg) => {
  let me = $('#user').val(),
    color = (from == me) ? 'green' : '#009afd';

    from = (from == me) ? 'Me' : from;
  $('#messages').append('<li><b style="color:' + color + '">' + from + '</b>: ' + msg + '</li>');
});

socket.on('notifyUser', function(user){
  let me = $('#user').val();

  if(user != me) {
    $('#notifyUser').text(user + ' is typing ...');
  }
  setTimeout(function(){ $('#notifyUser').text(''); }, 10000);
});

$(document).ready(function(){
  let name = makeid();
  $('#user').val(name);
  socket.emit('chatMessage', 'System', '<b>' + name + '</b> has joined the discussion');
});

function makeid() {
  let text = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for( var i=0; i < 5; i++ ) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
