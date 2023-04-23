const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://exception:exception123@nodeapi.qb6ozkg.mongodb.net/talkValley?retryWrites=true&w=majority"
);
const conn = mongoose.connection;
conn.on("connected", () => {
  console.log("connection established...");
});
conn.on("error", () => {
  console.log("connection not established...");
});
conn.on("disconnected", () => {
  console.log("disconnected from db...");
});
