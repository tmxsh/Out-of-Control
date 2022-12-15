const express = require('express'); //we are using express server
const app = express(); //create the express app
const http = require('http'); //we require http
const server = http.createServer(app); //create the server
const { Server } = require("socket.io"); //require socket.io
const io = new Server(server); //create our socket.io instance
//these are required for the socket io server to run

var p1 = -1; //player 1

var p2 = -1; //player 2

//this is the page we serve



//when the socket receives a connection
io.on('connection', (socket) => {
  if(p1 == -1) //if player 1 isn't set yet, we want to set it
  {
    p1 = socket.id; //set p1 to the socket id
    console.log("p1 is " + p1); //checking our p1
  }
  else if(p2 == -1) //if p2 isn't set
  {
    p2 = socket.id; //set p2 to the socket id
    console.log("p2 is " + p2); //checking our p2
  }
  else //we only allow two players at a time
  {
    console.log("too many connections"); 
  }
});


io.on('connection', (socket) => {
  socket.on('draw', (msg) => { //on request to draw, we need to answer with the right hand
    if(socket.id == p1) //if the socket is p1
    {
      io.emit('initDraw', "1"); //repond with 1
    }
    else //the socket is p2
    {
      console.log("draw request from p2");
      io.emit('draw', "1"); //respond with 2
    }
  });

  //if one of the sockets emits play
  socket.on('play', (msg, callback) => {
    if(socket.id == p1) //if it comes from player 1, we need to alert 2
    {
      console.log("sending move to player 2");
      io.emit('play1', msg); //alert the listening client sockets that play1 did something
      callback({
        status: "ok"
      });
    }
    if(socket.id == p2)
    {
      io.emit('play2', msg); //alert the listening client sockets that play2 did something
      callback({
        status: "ok"
      });
    }

  });
});

//this controls what gets displayed after the server is started when users go to localhost:3000
//so for example, this determines what happens if you put localhost:3000/player1 in the url bar
app.get('/player1', (req, res) => {
    res.sendFile(__dirname + '/player1.html'); //to specify which html file to connect to
});
//to server player 2
app.get('/player2', (req, res) => {
  res.sendFile(__dirname + '/player2.html'); //to specify which html file to connect to
});
//to serve the index page
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html'); //to specify which html file to connect to
});
//to serve the rules
app.get('/rules.html', (req, res) => {
  res.sendFile(__dirname + '/Control_2E_Rulebook.pdf'); //to specify which html file to connect to
});

//this sets our server to listen on port 3000
server.listen(3000, () => {
    console.log('listening on *:3000');
});


