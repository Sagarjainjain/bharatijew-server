import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    category_image: String,
    category_name: String
})

const Category = mongoose.model("Category", categorySchema);
export default Category;