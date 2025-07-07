import express from "express";
import mongoose from "mongoose";
import router from "./routes/authRoutes.js";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

const PORT = 3000;

server.get("/", (req, res) => {
  res.send("Welcome to the E-commerce Backend!");
});

mongoose
  .connect(
    "mongodb+srv://vikaskumar20012001:vikas1234@demo-wd-8.sdcsiw7.mongodb.net/E-commerce"
  )

  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

server.use("/api/auth", router);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
