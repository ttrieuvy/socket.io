http.createServer(app);
socketIO();
io.on("connection", (socket) => {
console.log("nguoi dung moi da ket noi");
});
