"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("FAQ_Questions", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      text: {
        allowNull: false,
        type: Sequelize.TEXT("long"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("FAQ_Questions");
  },
};
