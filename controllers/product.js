import mongoose from "mongoose";
import Product from "../models/product.js";

export const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getProductbyid = async (req, res) => {
  const { id } = req.params;
  try {
    const getproduct = await Product.findById(id);
    res.status(201).json(getproduct)
    } catch (error) {
      res.status(500).send("Server Error")
    }
};
export const getProductBySearch = async (req, res) => {
  const { category, subcategory } = req.query;
  try {
    const product = await Product.find({
      category: { $regex: category, $options: "i" },
      subcategory: { $regex: subcategory, $options: "i" },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postProduct = async (req, res) => {
  const { image, category, subcategory, melting, weight } = req.body;
  const newProduct = new Product({
    image,
    category,
    subcategory,
    melting,
    weight,
  });
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No Product with id: ${id}`);

  await Product.findByIdAndRemove(_id);
  res.json({ message: "Product deleted successfully." });
};
