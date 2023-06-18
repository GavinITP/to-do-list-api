const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  title: String,
  order: Number,
});

module.exports = mongoose.model("List", listSchema);
