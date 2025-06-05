import http from "http";
import fs from "fs";

const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello from home page");
  }
  if (req.url == "/about") {
    fs.readFile("demo1.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // res.end(data);
        res.writeHead(205, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
  // res.end("hello from server");
  // console.log(req.url, req.method, req.body, req.statusCode);
});
server.listen(PORT, () => {
  console.log("listening on port 3000");
});
