"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Musics",
      [
        // Rock
        {
          // id: 1,
          Artist: "Nirvana",
          MusicName: "Smells Like Teen Spirit",
          FilePath: "/assets/musics/test.mp3",
        },
        {
          // id: 2,
          Artist: "Radiohead",
          MusicName: "Creep",
          FilePath: "/assets/musics/test.mp3",
        },
        {
          // id: 3,
          Artist: "Pink Floyd",
          MusicName: "High Hopes",
          FilePath: "/assets/musics/test.mp3",
        },
        {
          // id: 4,
          Artist: "Jimi Hendrix",
          MusicName: "All Along the Watchtower",
          FilePath: "/assets/musics/test.mp3",
        },
        // Indie
        {
          // id: 5,
          Artist: "George Oglivier",
          MusicName: "Grave",
          FilePath: "/assets/musics/test.mp3",
        },
        {
          // id: 6,
          Artist: "The National",
          MusicName: "Afraid of Everyone",
          FilePath: "/assets/musics/test.mp3",
        },
        {
          // id: 7,
          Artist: "Wye Oak",
          MusicName: "Civilian",
          FilePath: "/assets/musics/test.mp3",
        },
        {
          // id: 8,
          Artist: "Vancouver Sleep Clinic",
          MusicName: "Killing Me To Love You",
          FilePath: "/assets/musics/test.mp3",
        },
        // MPB
        {
          // id: 9,
          Artist: "5 a Seco",
          MusicName: "Pra Você Dar O Nome",
          FilePath: "/assets/musics/test.mp3",
        },
        {
          // id: 10,
          Artist: "Scalene",
          MusicName: "Silêncio",
          FilePath: "/assets/musics/test.mp3",
        },
        {
          // id: 11,
          Artist: "Maneva",
          MusicName: "Luz Que Me Traz Paz",
          FilePath: "/assets/musics/test.mp3",
        },
        {
          // id: 12,
          Artist: "Cícero",
          MusicName: "Açúcar ou Adoçante?",
          FilePath: "/assets/musics/test.mp3",
        },
        // Rap
        {
          // id: 13,
          Artist: "Criolo",
          MusicName: "Não Existe Amor em SP",
          FilePath: "/assets/musics/test.mp3",
        },
        {
          // id: 14,
          Artist: "Sant",
          MusicName: "O Que Eu Não Sei",
          FilePath: "/assets/musics/test.mp3",
        },
        {
          // id: 15,
          Artist: "Baco Exu do Blues",
          MusicName: "Imortais e Fatais 2",
          FilePath: "/assets/musics/test.mp3",
        },
        {
          // id: 16,
          Artist: "Emicida",
          MusicName: "Eminência Parda",
          FilePath: "/assets/musics/test.mp3",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Musics", null, {});
  },
};
