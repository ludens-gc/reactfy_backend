const db = require("../models");
const { sequelize } = require("../models");

class PlaylistController {
  static async getAllPlaylists(req, res) {
    try {
      const [playlists, metadata] = await sequelize.query(`
        SELECT * FROM Playlists;
      `);
      return res
        .status(200)
        .header("Access-Control-Allow-Origin", "*")
        .json(playlists);
    } catch (error) {
      return res
        .status(500)
        .header("Access-Control-Allow-Origin", "*")
        .json(error.message);
    }
  }

  static async getPlaylistById(req, res) {
    const { id } = req.params;
    try {
      const [playlist, metadata] = await sequelize.query(`
        SELECT * FROM Playlists WHERE id = ${id};
      `);
      return res
        .status(200)
        .header("Access-Control-Allow-Origin", "*")
        .json(playlist);
    } catch (error) {
      return res
        .status(500)
        .header("Access-Control-Allow-Origin", "*")
        .json(error.message);
    }
  }

  static async getAllPlaylistMusics(req, res) {
    const { id } = req.params;
    try {
      const [playlistMusics, metadata] = await sequelize.query(`
        SELECT * FROM Playlists p
        INNER JOIN Playlists_has_Musics pm ON p.id = pm.Playlists_idPlaylist
        INNER JOIN Musics m ON m.id = pm.Musics_idMusic
        WHERE Playlists_idPlaylist = ${id};
      `);
      return res
        .status(200)
        .header("Access-Control-Allow-Origin", "*")
        .json(playlistMusics);
    } catch (error) {
      return res
        .status(500)
        .header("Access-Control-Allow-Origin", "*")
        .json(error.message);
    }
  }
}

module.exports = PlaylistController;
