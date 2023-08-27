import mongoose from "mongoose";

const toppostSchema = mongoose.Schema({
  image: String,
  weight: Number,
});

const TopPost = mongoose.model("TopPost", toppostSchema);
export default TopPost;
