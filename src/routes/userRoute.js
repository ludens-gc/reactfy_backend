const { Router } = require("express");
const UserController = require("../controllers/UserController.js");
const router = Router();

router
  .get("/users/login", UserController.getUserByEmail)
  .get("/users/:id", UserController.getUserById)
  .post("/users/register/", UserController.postUser)
  .put("/users/:id/edit/", UserController.putUser);

module.exports = router;
