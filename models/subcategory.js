import mongoose from "mongoose";

const subcategorySchema = mongoose.Schema({
  subcategory_name: String,
});

const SubCategory = mongoose.model("SubCategory", subcategorySchema);
export default SubCategory;
