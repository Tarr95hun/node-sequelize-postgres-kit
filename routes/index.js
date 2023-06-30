const express = require("express");
const router = express.Router();

const tweetsRoute = require("./tweets");
const usersRoute = require("./users");

module.exports = (config) => {
  router.get("/", (req, res) => {
    res.send("Home Page");
  });

  router.use("/todo", tweetsRoute(config));
  router.use("/user", usersRoute(config));

  return router;
};
