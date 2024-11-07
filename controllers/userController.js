const { validationResult } = require("express-validator");
const UserService = require("../services/userService");
const ExcelUtils = require("../utils/excelUtils");
const ValidationUtils = require("../utils/validationUtils");

class UserController {
  static async getUserForm(req, res) {
    res.render("userForm", { errors: [] });
  }

  static async addUser(req, res) {
    const errors = validationResult(req);

    if (!ValidationUtils.validateEmail(req.body.email)) {
      errors.errors.push({ msg: "Invalid email format." });
    }
    if (!ValidationUtils.validateMobile(req.body.mobile)) {
      errors.errors.push({ msg: "Mobile number must be a 10-digit number." });
    }

    if (!errors.isEmpty()) {
      return res.render("userForm", { errors: errors.array() });
    }

    await UserService.addUser(req.body);
    res.redirect("/add-user");
  }

  static async getUserTasks(req, res) {
    const user = await UserService.getUserWithTasks(req.params.id);
    res.render("userTasks", { user });
  }

  static async exportData(req, res) {
    const users = await UserService.getUsersWithTasks();
    const workbook = ExcelUtils.createWorkbook();

    const userHeaders = ["ID", "Name", "Email", "Mobile"];
    const userSheet = ExcelUtils.addWorksheet(workbook, "Users", userHeaders);
    const userRows = users.map((user) => [
      user.id,
      user.name,
      user.email,
      user.mobile,
    ]);
    ExcelUtils.addRows(userSheet, userRows);

    const taskHeaders = ["Task ID", "Task Name", "Status", "User ID"];
    const taskSheet = ExcelUtils.addWorksheet(workbook, "Tasks", taskHeaders);
    const taskRows = users.flatMap((user) =>
      user.tasks.map((task) => [task.id, task.task_name, task.status, user.id])
    );
    ExcelUtils.addRows(taskSheet, taskRows);

    await ExcelUtils.exportWorkbook(res, workbook, "users_tasks.xlsx");
  }
}

module.exports = UserController;
