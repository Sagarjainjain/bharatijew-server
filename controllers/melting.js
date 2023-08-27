import mongoose from "mongoose";
import Melting from "../models/melting.js";

export const getMelting = async (req, res) => {
  try {
    const melting = await Melting.find();
    res.status(200).json(melting);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postMelting = async (req, res) => {
  const { melting } = req.body;
  const newMelting = new Melting({ melting });
  try {
    await newMelting.save();
    res.status(201).json(newMelting);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteMelting = async (req, res) => {
  const { id: _id } = req.params; 

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No Melting with id: ${id}`);

  await Melting.findByIdAndRemove(_id);
  res.json({ message: "Melting deleted successfully." });
};
