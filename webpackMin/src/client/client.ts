console.log("Hello")

import { io } from "socket.io-client";
//import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

const serverAddress = "https://codesandbox.io/s/web-terminal-tutorial-server-g2ihu";

//Server sandbox available at https://codesandbox.io/s/web-terminal-tutorial-server-g2ihu

function connectToSocket(serverAddress: string) {
  return new Promise(res => {
    const socket = io(serverAddress);
    res(socket);
  });
}

function start() {
  const container = document.getElementById("terminal-container");

  connectToSocket(serverAddress).then(socket => {
    console.log("connected to server")
  });
}

// Better to start on DOMContentLoaded. So, we know terminal-container is loaded
start();
