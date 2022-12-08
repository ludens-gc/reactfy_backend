"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FAQ_Questions extends Model {
    static associate(models) {}
  }
  FAQ_Questions.init(
    {
      title: DataTypes.STRING,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "FAQ_Questions",
    }
  );
  return FAQ_Questions;
};
