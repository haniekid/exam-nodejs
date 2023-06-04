const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;
const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://0.0.0.0:27017/default";

app.get("/", (req, res) => {
  res.send("Hello world!");
});

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connect to database sucessfully!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
