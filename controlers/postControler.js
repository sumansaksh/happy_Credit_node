const express = require("express");
const Post = require("../schema/PostSchema");
// const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsnyError");
exports.createPost = catchAsyncError(async (req, res, next) => {
  const post = await Post.create(req.body);
  res.status(200).send({ success: true, post: req.body });
});
