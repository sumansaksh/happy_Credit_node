// mongodb+srv://suman:<password>@cluster0.x26zycb.mongodb.net/?retryWrites=true&w=majority
const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv");
const PORT = process.env.PORT;
dotenv.config({ path: "./config.env" });
app.use(express.json());
app.use(bodyparser.json());
app.use(cors());
const db = process.env.DATABASE;

const Post = require("./schema/PostSchema");
app.use(require("./Router/postRouter"));
app.use(require("./Router/commentRoute"));
// conecting to mongodb with the help of mongoose
mongoose
  .connect(db)
  .then((res) => {
    console.log("connection successfully done");
  })
  .catch((err) => {
    console.log(err);
  });

//starting server

app.get("/", async (req, res) => {
  console.log("suman");
  await res.send("working fine");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
