"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Playlists",
      [
        {
          // id: 1,
          PlaylistName: "Rock",
          Cover: "/assets/covers/rock_cover.jpg",
        },
        {
          // id: 2,
          PlaylistName: "Indie",
          Cover: "/assets/covers/indie_cover.jpg",
        },
        {
          // id: 3,
          PlaylistName: "MPB",
          Cover: "/assets/covers/mpb_cover.jpg",
        },
        {
          // id: 4,
          PlaylistName: "Rap",
          Cover: "/assets/covers/rap_cover.jpg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Playlists", null, {});
  },
};
