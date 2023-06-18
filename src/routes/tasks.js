const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const List = require("../models/List");

router.post("/tasks", (req, res) => {
  const { description, dueDate, order, listId } = req.body;

  List.findById(listId)
    .then((list) => {
      if (!list) {
        return res.status(404).json({ error: "List not found" });
      }

      const task = new Task({
        description,
        dueDate,
        order,
        list: list._id,
      });

      task
        .save()
        .then((newTask) => {
          res.status(201).json(newTask);
        })
        .catch((error) => {
          res.status(500).json({ error: "Failed to create a new task" });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error retrieving list" });
    });
});

router.get("/tasks", (_req, res) => {
  Task.find({})
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error retrieving tasks" });
    });
});

router.get("/tasks/:taskId", (req, res) => {
  const taskId = req.params.taskId;

  Task.findById(taskId)
    .then((task) => {
      if (!task) {
        res.status(404).json({ error: "Task not found" });
      } else {
        res.json(task);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error retrieving task" });
    });
});

router.put("/tasks/:taskId", (req, res) => {
  const { description, dueDate, order } = req.body;
  const { taskId } = req.params;

  Task.findByIdAndUpdate(taskId, { description, dueDate, order }, { new: true })
    .then((updatedTask) => {
      if (updatedTask) {
        res.json(updatedTask);
      } else {
        res.status(404).json({ error: "Task not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update the task" });
    });
});

router.delete("/tasks/:taskId", (req, res) => {
  const { taskId } = req.params;

  Task.findByIdAndRemove(taskId)
    .then((deletedTask) => {
      if (deletedTask) {
        res.json(deletedTask);
      } else {
        res.status(404).json({ error: "Task not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete the task" });
    });
});

router.put("/tasks/:taskId/move", (req, res) => {
  const { taskId } = req.params;
  const { newListId } = req.body;

  Task.findByIdAndUpdate(taskId, { list: newListId }, { new: true })
    .then((updatedTask) => {
      if (updatedTask) {
        res.json(updatedTask);
      } else {
        res.status(404).json({ error: "Task not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to move the task" });
    });
});

router.put("/tasks/:taskId/reorder", (req, res) => {
  const { taskId } = req.params;
  const { newOrder } = req.body;

  Task.findByIdAndUpdate(taskId, { order: newOrder }, { new: true })
    .then((updatedTask) => {
      if (updatedTask) {
        res.json(updatedTask);
      } else {
        res.status(404).json({ error: "Task not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to reorder the task" });
    });
});

module.exports = router;
