import mongoose from "mongoose";
import LiveSilverRate from "../models/silverrate.js";

export const getLiveSilverRate = async (req, res) => {
  try {
    const LivesilverRate = await LiveSilverRate.find();
    LivesilverRate.reverse();
    res.status(200).json(LivesilverRate);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postLiveSilverRate = async (req, res) => {
  const { silverRate } = req.body;
  const newLiveSilverRate = new LiveSilverRate({ silverRate });
  try {
    await newLiveSilverRate.save();
    res.status(201).json(newLiveSilverRate);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteLiveSilverRate = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No Silverrate with id: ${id}`);

  await LiveSilverRate.findByIdAndRemove(_id);
  res.json({ message: "Silverrate deleted successfully." });
};
