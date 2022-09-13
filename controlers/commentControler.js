const express = require("express");
const Comment = require("../schema/commentSchema");

const catchAsyncError = require("./catchAsnyError");
exports.createcomment = catchAsyncError(async (req, res, next) => {
  console.log("entered");

  const comment = await Comment.create(req.body);
  res.status(200).send({ success: true, comment: req.body });
});
