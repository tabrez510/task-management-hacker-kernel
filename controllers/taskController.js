const TaskService = require("../services/taskService");
const UserService = require("../services/userService");

class TaskController {
  static async getTaskForm(req, res) {
    const users = await UserService.getAllUsers();
    res.render("taskForm", { users });
  }

  static async addTask(req, res) {
    await TaskService.addTask(req.body);
    res.redirect("/add-task");
  }
}

module.exports = TaskController;
