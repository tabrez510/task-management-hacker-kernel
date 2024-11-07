const express = require("express");
const TaskController = require("../controllers/taskController");

const router = express.Router();

router.get("/add-task", TaskController.getTaskForm);
router.post("/add-task", TaskController.addTask);

module.exports = router;
