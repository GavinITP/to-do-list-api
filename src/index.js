const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log("running...");
});
