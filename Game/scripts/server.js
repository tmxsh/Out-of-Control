const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
//these are required for the socket io server to run


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/game.html'); //to specify which html file to connect to
  });

  io.on('connection', (socket) => {
    console.log(socket.id);
  })

server.listen(3000, () => {
    console.log('listening on *:3000');
});


