import mongoose from "mongoose";
import TopPost from "../models/topost.js";

export const getTopPost = async (req, res) => {
  try {
    const toppost = await TopPost.find();
    res.status(200).json(toppost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postTopPost = async (req, res) => {
  const { image, weight } = req.body;
  const newTopPost = new TopPost({ image, weight });
  try {
    await newTopPost.save();
    res.status(201).json(newTopPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTopPost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No TopPost with id: ${id}`);

  await TopPost.findByIdAndRemove(_id);
  res.json({ message: "TopPost deleted successfully." });
};
