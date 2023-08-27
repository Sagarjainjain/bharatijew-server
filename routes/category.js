import express from "express";
import {getCategory, postCategory, deleteCategory} from "../controllers/category.js"


const router = express.Router();

router.get("/", getCategory);
router.post("/", postCategory);
router.delete("/:id", deleteCategory);


export default router;