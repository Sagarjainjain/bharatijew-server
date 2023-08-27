import mongoose from "mongoose";
import Banner from "../models/banner.js";

export const getBanner = async (req, res) => {
  try {
    const banner = await Banner.find();
    res.status(200).json(banner);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postBanner = async (req, res) => {
  const { bannerimage } = req.body;
  const newBanner = new Banner({ bannerimage });
  try {
    await newBanner.save();
    res.status(201).json(newBanner);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteBanner = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No Bannerimage with id: ${id}`);

  await Banner.findByIdAndRemove(_id);
  res.json({ message: "Bannerimage deleted successfully." });
};
