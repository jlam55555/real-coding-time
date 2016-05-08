var server = require("http").createServer();
var io = require("socket.io")(server);
//io.set("origins", "jlam55555.github.com/realcodingtime/:*");
io.on("connection", function(socket) {
  console.log("connected");
  socket.on("disconnect", function() {
    console.log("disconnected");
  });
});
server.listen(3000);
