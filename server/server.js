const path = require("path");
const http = require("http"); // can dung thu vien http boi socket io lam viec k that su hieu qua vs app
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

const app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

// moi lan doi tuong io() dc khoi tao, se hien dong thong bao nay
// cach ket noi server ben file .js
io.on("connection", (socket) => {
  console.log("nguoi dung moi da ket noi");

  socket.on("disconnect", () => {
    console.log("nguoi dung da ngat ket noi");
  });
});

server.listen(port, () => {
  console.log(publicPath);
  console.log(`server dang chay tren port ${port}`);
});
