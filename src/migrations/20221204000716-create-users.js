"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      UserName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Birthdate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      Gender: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
