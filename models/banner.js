import mongoose from "mongoose";

const bannerSchema = mongoose.Schema({
  bannerimage: String,
});

const Banner = mongoose.model("Banner", bannerSchema);
export default Banner;
