var dotenv = require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MonGo_URL)
  .then(() => {
    console.log("Database Connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
