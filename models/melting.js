import mongoose from "mongoose";

const meltingSchema = mongoose.Schema({
  melting: String,
});

const Melting = mongoose.model("melting", meltingSchema);
export default Melting;
