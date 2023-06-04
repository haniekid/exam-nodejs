const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const router = require("./routes");

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;
const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://0.0.0.0:27017/default";

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
