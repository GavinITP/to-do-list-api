const express = require("express");
const router = express.Router();
const List = require("../models/List");

router.post("/lists", (req, res) => {
  // Create a new list
});

router.put("/lists/:listId", (req, res) => {
  // Update a list
});

router.delete("/lists/:listId", (req, res) => {
  // Delete a list and its tasks
});

router.put("/lists/:listId/reorder", (req, res) => {
  // Reorder a list
});

module.exports = router;
