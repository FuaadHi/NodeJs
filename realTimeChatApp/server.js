const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.emit("chat-messege", "hello world");

  socket.on("send-chat-messege", (messege) => {
    socket.broadcast.emit("chat-messege", messege);
  });
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
server.listen(3000, () => {
  console.log("server is working on url: http://localhost:3000 ");
});
