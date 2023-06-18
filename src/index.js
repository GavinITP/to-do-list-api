const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const taskRoutes = require("./routes/tasks");
const listRoutes = require("./routes/lists");

dotenv.config();

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

app.use("/api", taskRoutes);
app.use("/api", listRoutes);

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
