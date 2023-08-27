import mongoose from "mongoose";

const liveGoldRateSchema = mongoose.Schema({
  goldRateofseven: String,
  goldRateofnine: String,
});

const LiveGoldRate = mongoose.model("liveGoldrate", liveGoldRateSchema);
export default LiveGoldRate;
