var app = require("express")();
var server = require("http").createServer();
var io = require("socket.io")(server);
io.on("connection", function(socket) {
  console.log("connected");
  socket.on("disconnect", function() {
    console.log("disconnected");
  });
});
app.all("/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.get("/*", function(req, res) {
  res.sendFile(__dirname + "/public/" + req.URL);
});
server.listen(3000);
