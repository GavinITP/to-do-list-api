const express = require("express");
const router = express.Router();
const List = require("../models/List");
const Task = require("../models/Task");

router.get("/lists", (_req, res) => {
  List.find({})
    .then((lists) => {
      res.json(lists);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error retrieving lists" });
    });
});

router.get("/lists/:listId/tasks", (req, res) => {
  const listId = req.params.listId;

  Task.find({ list: listId })
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error retrieving tasks" });
    });
});

router.post("/lists", (req, res) => {
  const { title, order } = req.body;

  const newList = new List({
    title,
    order,
  });

  newList
    .save()
    .then((list) => {
      res.status(201).json(list);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to create a new list" });
    });
});

router.put("/lists/:listId", (req, res) => {
  const { listId } = req.params;
  const { title, order } = req.body;

  List.findByIdAndUpdate(listId, { title, order }, { new: true })
    .then((updatedList) => {
      if (updatedList) {
        res.json(updatedList);
      } else {
        res.status(404).json({ error: "List not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update the list" });
    });
});

router.delete("/lists/:listId", (req, res) => {
  const { listId } = req.params;

  List.findByIdAndRemove(listId)
    .then((deletedList) => {
      if (deletedList) {
        Task.deleteMany({ list: listId })
          .then(() => {
            res.json({
              message: "List and associated tasks deleted successfully",
            });
          })
          .catch((error) => {
            res
              .status(500)
              .json({ error: "Failed to delete associated tasks" });
          });
      } else {
        res.status(404).json({ error: "List not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete the list" });
    });
});

router.put("/lists/:listId/reorder", (req, res) => {
  const { listId } = req.params;
  const { newOrder } = req.body;

  List.findById(listId)
    .then((list) => {
      if (!list) {
        return res.status(404).json({ error: "List not found" });
      }

      list.order = newOrder;

      return list.save();
    })
    .then((updatedList) => {
      res.json(updatedList);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to reorder the list" });
    });
});

module.exports = router;
