const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log(`Anew user was Connected`);

  socket.on("joinroom", () => {
    socket.join("myroom");
  });
  socket.on("sendmsg", (data) => {
    io.to("myroom").emit("newmsg");
  });
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

server.listen(3000, () => {
  console.log(`server is running on URL: 
  http://localhost:3000`);
});

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZnVhYWQiLCJhZ2UiOjIyLCJpYXQiOjE2MzI1ODI0NjIsImV4cCI6MTYzMjU4NjA2Mn0.OkyO8EkzQcERd7uPC8Ahd9osBaAGm5ocGqKZKbed7Ss

/*  *********** Rest API & tockens ***************

  // const jwt_secret = "this is the token data for client tokens";

  // app.use((req, res, next) => {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader("Access-Control-Allow-Method", "*");
  //   res.setHeader("Access-Control-Allow-Headers", "Authorization");
  //   next();
  // });

  // app.get("/", (req, res, next) => {
  //   let token = jwt.sign(
  //     {
  //       name: "fuaad",
  //       age: 22,
  //     },
  //     jwt_secret,
  //     {
  //       expiresIn: "1h",
  //     }
  //   );
  //   res.json({
  //     token: token,
  //   });
  // });
  // app.post("/", express.json(), (req, res, next) => {
  //   let token = req.header("Authorization");
  //   console.log(token);

  //   try {
  //     let data = jwt.verify(token, jwt_secret);
  //     res.json(data);
  //   } catch (err) {
  //     res.json({ user: false });
  //   }
  // });

  // app.get("/", (req, res, next) => {
  //   res.json({
  //     name: "fuaad",
  //     age: 22,
  //   });
  // });

  // app.post("/", express.json(), (req, res, next) => {
  //   console.log(req.body);
  //   res.json(req.body);
  // });

  // app.delete("/", (req, res, next) => {
  //   console.log("Deleted");
  //   res.json({});
  // });
*/
