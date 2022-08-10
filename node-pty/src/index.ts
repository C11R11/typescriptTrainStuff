import {createServer} from "http"
import {SocketService} from "./SocketService";

/* 
  Create Server from http module.
  If you use other packages like express, use something like,
  const app = require("express")();
  const server = require("http").Server(app);

*/
const server = createServer((req: any, res: { write: (arg0: string) => void; end: () => void; }) => {
  res.write("Terminal Server Running.");
  res.end();
});

const port = 9999;

server.listen(port, function() {
  console.log("Server listening on : ", port);
  const socketService = new SocketService();
  socketService.attachServer(server);
});
