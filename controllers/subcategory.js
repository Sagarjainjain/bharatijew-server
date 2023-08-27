import mongoose from "mongoose";
import SubCategory from "../models/subcategory.js";

export const getSubCategory = async (req, res) => {
  try {
    const subcategory = await SubCategory.find();
    res.status(200).json(subcategory);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postSubCategory = async (req, res) => {
  const { subcategory_name } = req.body;
  const newSubCategory = new SubCategory({ subcategory_name });
  try {
    await newSubCategory.save();
    res.status(201).json(newSubCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteSubCategory = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No subcategory with id: ${id}`);

  await SubCategory.findByIdAndRemove(_id);
  res.json({ message: "SubCategory deleted successfully." });
};
