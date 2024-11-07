const Task = require("../models/Task");

class TaskService {
  static async addTask(taskData) {
    return Task.query().insert(taskData);
  }
}

module.exports = TaskService;
