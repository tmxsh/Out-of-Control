const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
//these are required for the socket io server to run

var p1 = -1; //player 1

var p2 = -1; //player 2

//this is the page we serve
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/game.html'); //to specify which html file to connect to
  });

io.on('connection', (socket) => {
  if(p1 == -1)
  {
    p1 = socket.id;
    console.log("p1 is " + p1); //checking our p1
  }
  else if(p2 == -1)
  {
    p2 = socket.id;
    console.log("p2 is " + p2); //checking our p2
  }
  else
  {
    console.log("too many connections");
  }
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});


