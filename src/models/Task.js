const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: String,
  dueDate: Date,
  order: Number,
  list: { type: mongoose.Schema.Types.ObjectId, ref: "List" },
});

module.exports = mongoose.model("Task", taskSchema);
