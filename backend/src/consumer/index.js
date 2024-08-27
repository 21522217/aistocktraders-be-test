const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const runConsumer = require("./consumer");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

app.use(cors());

runConsumer(io).catch(console.error);

server.listen(8082, () => {
    console.log(`Consumer server running on port 8082`);
});
