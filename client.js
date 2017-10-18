const net = require("net");
const stdin = process.stdin;

var socket = net.createConnection(process.argv[2]);

socket.on("data", (data) => {
  console.log(data.toString());
});

stdin.on("data", data => {
  socket.write(data);
});
