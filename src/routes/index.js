const express = require("express");
const users = require("./userRoute.js");
const playlists = require("./playlistRoute.js");
const faq = require("./faqRoute.js");

const routes = (app) => {
  app.get("/", (req, res) =>
    res.status(200).send({ defaultRoute: "Default route" })
  );
  app.use(express.json(), users, playlists, faq);
};

module.exports = routes;
