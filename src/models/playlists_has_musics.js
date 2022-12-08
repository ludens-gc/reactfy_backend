"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Playlists_has_Musics extends Model {
    static associate(models) {
      Playlists_has_Musics.belongsTo(models.Playlists, {
        foreignKey: "Playlists_idPlaylist",
      });
      Playlists_has_Musics.belongsTo(models.Musics, {
        foreignKey: "Musics_idMusic",
      });
    }
  }
  Playlists_has_Musics.init(
    {
      Playlists_idPlaylist: DataTypes.INTEGER,
      Musics_idMusic: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Playlists_has_Musics",
      timestamps: false,
    }
  );
  return Playlists_has_Musics;
};
