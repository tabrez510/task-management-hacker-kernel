const User = require("../models/User");

class UserService {
  static async getAllUsers() {
    return User.query();
  }

  static async addUser(userData) {
    return User.query().insert(userData);
  }

  static async getUserWithTasks(userId) {
    return User.query().findById(userId).withGraphFetched("tasks");
  }

  static async getUsersWithTasks() {
    return User.query().withGraphFetched("tasks");
  }
}

module.exports = UserService;
