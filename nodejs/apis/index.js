// import http from "http";
import express from "express";
import fs from "fs";
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
const PORT = 3000;

server.get("/home", (req, res) => {
  res.end("hello from home page");
});

server.post("/login", (req, res) => {
  //   const data = req.body;
  //   console.log(req.body);
  fs.writeFile("data.json", JSON.stringify(req.body), (err) => {
    if (err) {
      console.log(err);
    } else {
      res.end("data saved");
    }
  });
});

server.put("/update", (req, res) => {
  //   const data = req.body;
  //   console.log(req.body);
  fs.writeFile("data.json", JSON.stringify(req.body), (err) => {
    if (err) {
      console.log(err);
    } else {
      res.end("data updated");
    }
  });
});

server.delete("/remove", (req, res) => {
  //   const data = req.body;
  //   console.log(req.body);
  fs.unlink("data.json", (err) => {
    if (err) {
      console.log(err);
    } else {
      res.end("data removed");
    }
  });
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
