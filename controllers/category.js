import mongoose from "mongoose";
import Category from "../models/category.js";

export const getCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postCategory = async (req, res) => {
  const { category_image, category_name } = req.body;
  const newCategory = new Category({ category_image, category_name });
  try {
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No category with id: ${id}`);

  await Category.findByIdAndRemove(_id);
  res.json({ message: "Category deleted successfully." });
};
