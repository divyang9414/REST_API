const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://divyangrnw:12345@cluster0.farsyal.mongodb.net/"
  )
  .then(() => console.log("connected to the database"));

module.exports = mongoose;
