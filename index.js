var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
io.on("connection", function(socket) {
  console.log("connected");
  socket.on("disconnect", function() {
    console.log("disconnected");
  });
});
app.use(require("express").static(__dirname + "/public"));
http.listen(process.env.PORT || 5000);
