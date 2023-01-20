const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 7000;
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost/game")
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/game", require("./routes/gameRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
