import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    "mongodb+srv://vikaskumar20012001:vikaskumar123@cluster0.d1kcokp.mongodb.net/"
  )
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

//schema

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: Number,
});

const User = mongoose.model("weekdays-8-data", userSchema);

app.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  await user.save();
  res.send("User registered successfully");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
