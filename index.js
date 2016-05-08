var http = require("http").createServer();
var io = require("socket.io")(http);

var code = "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello, World!</title>\n  </head>\n  <body>\n    <h1>Hello, World!</h1>\n  </body>\n</html>";
io.on("connection", socket => {
  socket.emit("code", code);
  socket.on("disconnect", () => {});
});
http.listen(process.env.PORT || 5000);
