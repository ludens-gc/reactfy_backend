"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Playlists extends Model {
    static associate(models) {
      Playlists.hasMany(models.Playlists_has_Musics, {
        foreignKey: "Playlists_idPlaylist",
      });
    }
  }
  Playlists.init(
    {
      PlaylistName: DataTypes.STRING,
      Cover: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Playlists",
      timestamps: false,
    }
  );
  return Playlists;
};
