const express = require("express");
const router = express.Router();

const UserService = require("../../services/UserService");
const TweetService = require("../../services/TweetService");

module.exports = (config) => {
  const userService = new UserService(config.postgres.client);
  const tweetService = new TweetService(config.postgres.client);

  router.get("/", async (req, res) => {
    try {
      const tweet = null;
      res.send(tweet);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
