"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {}
  }
  Users.init(
    {
      Email: DataTypes.STRING,
      Password: DataTypes.STRING,
      UserName: DataTypes.STRING,
      Birthdate: DataTypes.DATEONLY,
      Gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
      timestamps: false,
    }
  );
  return Users;
};
