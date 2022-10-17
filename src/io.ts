import { Server } from "socket.io";
import { createServer } from "http";
import app  from "./app";

export const httpServer = createServer(app);

export const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {

  console.log(socket.id);

  socket.on('msg', (msg : string) => {
    console.log(msg);
  });

  socket.on("disconnect", (reason) => {
    console.log(`disconnect ${socket.id} due to ${reason}`);
  });

  socket.on("ids", () => {
    socket.emit('prub',io.sockets.sockets)
    console.log(io.sockets.sockets)
  });
});

