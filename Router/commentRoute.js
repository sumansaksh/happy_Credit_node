const express = require("express");
const router = express.Router();

const { createcomment } = require("../controlers/commentControler");

router.put("/comment", (req, res, next) => {
  createcomment(req, res, next);
});

module.exports = router;
