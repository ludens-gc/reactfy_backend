"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          // id: 1,
          Email: "root@root.com",
          Password: "root",
          UserName: "Root",
          Birthdate: new Date(2022, 1, 1),
          Gender: "root",
        },
        {
          // id: 2,
          Email: "test@test.com",
          Password: "test",
          UserName: "Test",
          Birthdate: new Date(2022, 1, 1),
          Gender: "test",
        },
        {
          // id: 3,
          Email: "ludens@gmail.com",
          Password: "ludens",
          UserName: "Ludens",
          Birthdate: new Date(2022, 1, 1),
          Gender: "Masculino",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
