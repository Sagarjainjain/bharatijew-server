import mongoose from "mongoose";
import LiveGoldRate from "../models/goldrate.js";

export const getLiveGoldRate = async (req, res) => {
  try {
    const LivegoldRate = await LiveGoldRate.find();
    LivegoldRate.reverse();
    res.status(200).json(LivegoldRate);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postLiveGoldRate = async (req, res) => {
  const { goldRateofseven, goldRateofnine } = req.body;
  const newLiveGoldRate = new LiveGoldRate({ goldRateofseven, goldRateofnine });
  try {
    await newLiveGoldRate.save();
    res.status(201).json(newLiveGoldRate);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteLiveGoldRate = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No Livegold with id: ${id}`);

  await LiveGoldRate.findByIdAndRemove(_id);
  res.json({ message: "Livegold deleted successfully." });
};
