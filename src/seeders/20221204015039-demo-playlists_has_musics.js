"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Playlists_has_Musics",
      [
        // Rock
        {
          // id: 1,
          Playlists_idPlaylist: 1,
          Musics_idMusic: 1,
        },
        {
          // id: 2,
          Playlists_idPlaylist: 1,
          Musics_idMusic: 2,
        },
        {
          // id: 3,
          Playlists_idPlaylist: 1,
          Musics_idMusic: 3,
        },
        {
          // id: 4,
          Playlists_idPlaylist: 1,
          Musics_idMusic: 4,
        },
        // Indie
        {
          // id: 5,
          Playlists_idPlaylist: 2,
          Musics_idMusic: 5,
        },
        {
          // id: 6,
          Playlists_idPlaylist: 2,
          Musics_idMusic: 6,
        },
        {
          // id: 7,
          Playlists_idPlaylist: 2,
          Musics_idMusic: 7,
        },
        {
          // id: 8,
          Playlists_idPlaylist: 2,
          Musics_idMusic: 8,
        },
        // MPB
        {
          // id: 9,
          Playlists_idPlaylist: 3,
          Musics_idMusic: 9,
        },
        {
          // id: 10,
          Playlists_idPlaylist: 3,
          Musics_idMusic: 10,
        },
        {
          // id: 11,
          Playlists_idPlaylist: 3,
          Musics_idMusic: 11,
        },
        {
          // id: 12,
          Playlists_idPlaylist: 3,
          Musics_idMusic: 12,
        },
        // Rap
        {
          // id: 13,
          Playlists_idPlaylist: 4,
          Musics_idMusic: 13,
        },
        {
          // id: 14,
          Playlists_idPlaylist: 4,
          Musics_idMusic: 14,
        },
        {
          // id: 15,
          Playlists_idPlaylist: 4,
          Musics_idMusic: 15,
        },
        {
          // id: 16,
          Playlists_idPlaylist: 4,
          Musics_idMusic: 16,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Playlists_has_Musics", null, {});
  },
};
