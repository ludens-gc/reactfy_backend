const db = require("../models");
const { sequelize } = require("../models");

class FAQController {
  static async getAllQuestions(req, res) {
    try {
      const [questions, metadata] = await sequelize.query(
        `SELECT * FROM FAQ_Questions;`
      );
      return res
        .status(200)
        .header("Access-Control-Allow-Origin", "*")
        .json(questions);
    } catch (error) {
      return res
        .status(500)
        .header("Access-Control-Allow-Origin", "*")
        .json(error.message);
    }
  }
}

module.exports = FAQController;
