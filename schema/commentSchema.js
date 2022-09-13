const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  PostId: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Comment", commentSchema);
