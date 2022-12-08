const { Router } = require("express");
const PlaylistController = require("../controllers/PlaylistController.js");
const router = Router();

router
  .get("/playlists/", PlaylistController.getAllPlaylists)
  .get("/playlists/:id", PlaylistController.getPlaylistById)
  .get("/playlists/:id/Musics", PlaylistController.getAllPlaylistMusics);

module.exports = router;
