const net = require("net");
const server = net.createServer();

server.listen(process.argv[2], () => {
  console.log(`Server listening on port ${ server.address().port }`);
});

server.on("close", () => {

});

server.on("connection", (socket) => {
  socket.write("Connection established\n");
  
  socket.on("data", (data) => {
    console.log(data.toString());
    socket.write(data);
  });
});

server.on("error", (err) => {
  throw err;
});
