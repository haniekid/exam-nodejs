const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: "Anonymous",
        required: true,
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
