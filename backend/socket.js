const socketIO = require("socket.io");
const userModel = require("./models/user.model");
const captainModel = require("./models/captain.model");
let io;

const initializeSocket = (server) => {
  io = socketIO(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("join", async (data) => {
      const { userId, userType } = data;
      if (userType === "user") {
        await userModel.findByIdAndUpdate(userId, {
          $set: { socketId: socket.id },
        });
      } else if (userType === "captain") {
        await captainModel.findByIdAndUpdate(userId, {
          $set: { socketId: socket.id },
        });
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  return io;
};

const sendMessageToSocketId = (socketId, event, data) => {
  if (io) {
    io.to(socketId).emit(event, data);
  } else {
    console.error("Socket.io not initialized");
  }
};

module.exports = {
  initializeSocket,
  sendMessageToSocketId,
};
