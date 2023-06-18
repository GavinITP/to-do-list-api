const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

app.use(express.json());

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.get("/", (_req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log("running...");
});
