import mongoose from "mongoose";

const liveSilverRateSchema = mongoose.Schema({
  silverRate: String,
});

const LiveSilverRate = mongoose.model("livesilverrate", liveSilverRateSchema);
export default LiveSilverRate;
