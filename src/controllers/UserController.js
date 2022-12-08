const db = require("../models");

class UserController {
  static async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await db.Users.findOne({
        where: { id: Number(id) },
      });
      return res
        .status(200)
        .header("Access-Control-Allow-Origin", "*")
        .json(user);
    } catch (error) {
      return res
        .status(500)
        .header("Access-Control-Allow-Origin", "*")
        .json(error.message);
    }
  }

  static async getUserByEmail(req, res) {
    const { email } = req.query;
    try {
      const user = await db.Users.findOne({
        where: { Email: String(email) },
      });
      return res
        .status(200)
        .header("Access-Control-Allow-Origin", "*")
        .json(user);
    } catch (error) {
      return res
        .status(500)
        .header("Access-Control-Allow-Origin", "*")
        .json(error.message);
    }
  }

  static async postUser(req, res) {
    const newUser = req.body;
    try {
      const newRegisteredUser = await db.Users.create(newUser);
      return res
        .status(200)
        .header("Access-Control-Allow-Origin", "*")
        .json(newRegisteredUser);
    } catch (error) {
      return res
        .status(500)
        .header("Access-Control-Allow-Origin", "*")
        .json(error.message);
    }
  }

  static async putUser(req, res) {
    const { id } = req.params;
    const newUserInfo = req.body;
    try {
      await db.Users.update(newUserInfo, {
        where: {
          id: Number(id),
        },
      });
      const updatedInfo = await db.Users.findOne({
        where: { id: Number(id) },
      });
      return res
        .status(200)
        .header("Access-Control-Allow-Origin", "*")
        .json(updatedInfo);
    } catch (error) {
      return res
        .status(500)
        .header("Access-Control-Allow-Origin", "*")
        .json(error.message);
    }
  }
}

module.exports = UserController;
