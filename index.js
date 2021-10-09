const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { ExpressPeerServer } = require("peer");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const server = app.listen(port) 

const peerServer = ExpressPeerServer(server, {
  path: "/",
  key: "diversifiedDating",
});

app.use(cors());
app.use("/", peerServer);


