import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("hello from home page");
});

app.get("/about", (req, res) => {
  res.end("hello from about page");
});

app.get("/contact", (req, res) => {
  res.end("hello from contact page");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
