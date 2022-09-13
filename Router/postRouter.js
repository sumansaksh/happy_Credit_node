const express = require("express");
const router = express.Router();

const { createPost } = require("../controlers/postControler");
router.get("/test", (req, res, next) => {
  res.send("testing Done");
});

router.post("/post", (req, res, next) => {
  createPost(req, res, next);
});

module.exports = router;
