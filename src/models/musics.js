"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Musics extends Model {
    static associate(models) {
      Musics.hasMany(models.Playlists_has_Musics, {
        foreignKey: "Musics_idMusic",
      });
    }
  }
  Musics.init(
    {
      Artist: DataTypes.STRING,
      MusicName: DataTypes.STRING,
      FilePath: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Musics",
      timestamps: false,
    }
  );
  return Musics;
};
