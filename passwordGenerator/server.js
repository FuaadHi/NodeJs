const express = require("express");
const app = express();

let posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
  { id: 3, title: "post 3" },
  { id: 4, title: "post 4" },
  { id: 5, title: "post 5" },
];

app.get("/", (req, res) => {
  res.send(posts);
});

app.listen(5000);

//
//
//
//
//
//
//
//
//
//
//
// const http = require("http");
// const server = http.createServer((req, resp) => {
//   if (req.url === "/") {
//     resp.write(`
//     <h1>PassWord Generator</h1>
//     <form action="/getPassword">
//         <input type="number" name="length" placeholder="Enter The Length">
//         <button type="submit">Get Password </button>
//     </form>
//   `);
//   } else if (req.url.includes("/getPassword")) {
//     let length = req.url.slice("/getPassword?length=".length, req.url.length);
//     let symbols = ["a", "b", "#", "5", "$", "&", "@"];
//     let randomindex = Math.round(Math.random() * (symbols.length - 1));
//     let password = 0;
//     for (let i = 0; i < symbols.length; i++) {
//       password += symbols[i];
//     }

//     resp.write(`
//       Your password is : ${password}
//     `);
//   }
//   resp.end();
// });

// server.listen("5000");

// console.log(module);
