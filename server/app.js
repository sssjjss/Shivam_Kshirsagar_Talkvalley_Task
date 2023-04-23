require("./models/connection");
//import express package to create server
const express = require("express");
//import body parser for calling json() on each request //middleware
const bodyParser = require("body-parser");
//read .env file
require("dotenv").config();
//to allow cross origin resource sharing use cors package
const cors = require("cors");
//create app by calling express
const app = express();
//decide port number to run app
const port = 8000;
//use body parser middleware
app.use(bodyParser.json());
//use urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//use cors middleware
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("welcome to talkvalley server");
});

app.use("/api/ads", require("./routes/ads.routes"));
//listen to port
app.listen(port, () => {
  console.log(`talkvalley server is running on port ${port}`);
});
