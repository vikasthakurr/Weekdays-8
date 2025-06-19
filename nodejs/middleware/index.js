import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

let loginStatus = false;

app.use((req, res, next) => {
  // For demonstration, we're setting a username.
  // In a real app, this might come from a decoded token or session.
  req.body.username = "vikas";
  console.log(`Middleware 1: Set username to '${req.body.username}'`);
  next();
  //   res.end("middleware 1 ended the request");
});

app.use((req, res, next) => {
  if (loginStatus) {
    next();
  } else {
    res.send("you are not logged in");
  }
  // next();
  //   res.end("middleware 1 ended the request");
});
app.get("/", (req, res) => {
  // Access username from req.body, which was set by the first middleware
  const user = req.body.username || "Guest"; // Provide a fallback
  res.send(`Welcome, ${user}!`);
  // Alternatively, to send JSON:
  // res.json({ message: "Welcome", user: user });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
