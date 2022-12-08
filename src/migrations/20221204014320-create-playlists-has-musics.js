"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Playlists_has_Musics", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Playlists_idPlaylist: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Playlists",
          key: "id",
        },
      },
      Musics_idMusic: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Musics",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Playlists_has_Musics");
  },
};
