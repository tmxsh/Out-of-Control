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

io.on('connection', (socket) => {
  socket.on('draw', (msg) => { //on request to draw, we need to answer with the right hand
    if(socket.id == p1)
    {
      console.log("draw request from p1");
      io.emit('initDraw', "1");
    }
    else
    {
      console.log("draw request from p2");
      io.emit('draw', "1");
    }
  });

  socket.on('play', (msg) => {
    if(socket.id == p1) //if it comes from player 1, we need to alert 2
    {
      console.log("sending move to player 2");
      io.emit('play1', msg); //alert the listening client sockets that play1 did something
    }
    if(socket.id == p2)
    {
      io.emit('play2', msg); //alert the listening client sockets that play2 did something
    }

  });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/game.html'); //to specify which html file to connect to
});

app.get('/player2', (req, res) => {
  res.sendFile(__dirname + '/player2.html'); //to specify which html file to connect to
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});


