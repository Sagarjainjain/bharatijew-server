import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  image: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  melting: { type: String, required: true },
  weight: { type: Number, required: true },
});

const Product = mongoose.model("Products", productSchema);
export default Product;
