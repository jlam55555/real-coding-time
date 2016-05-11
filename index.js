var http = require("http").createServer();
var io = require("socket.io")(http);

var code = 'console.log("Hello, World!")';
io.on("connection", socket => {
  socket.emit("code", code);
  socket.on("codeUpdate", newCode => socket.broadcast.emit("code", (code = newCode)) );
  socket.on("disconnect", () => {});
});
http.listen(process.env.PORT || 5000);
