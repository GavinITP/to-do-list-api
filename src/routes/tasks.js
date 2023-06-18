const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.get("/tasks", (req, res) => {
  // Get all tasks
});

router.get("/tasks/:taskId", (req, res) => {
  // Get a specific task based on id
});

router.post("/tasks", (req, res) => {
  // Create a new task
});

router.put("/tasks/:taskId", (req, res) => {
  // Update a task
});

router.delete("/tasks/:taskId", (req, res) => {
  // Delete a task
});

router.put("/tasks/:taskId/move", (req, res) => {
  // Move a task to another list
});

router.put("/tasks/:taskId/reorder", (req, res) => {
  // Reorder a task in a list
});

module.exports = router;
