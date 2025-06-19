import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.end("hello world");
});

mongoose
  .connect(
    "mongodb+srv://vikaskumar20012001:vikaskumar123@cluster0.d1kcokp.mongodb.net/"
  )
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
