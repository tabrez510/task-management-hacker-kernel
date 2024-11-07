const express = require("express");
const UserController = require("../controllers/userController");

const router = express.Router();

router.get("/add-user", UserController.getUserForm);
router.post("/add-user", UserController.addUser);
router.get("/user-tasks/:id", UserController.getUserTasks);
router.get("/export-data", UserController.exportData);

module.exports = router;
