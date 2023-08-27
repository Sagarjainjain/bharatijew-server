import express from "express";
import {
getSubCategory,
postSubCategory,
deleteSubCategory
} from "../controllers/subcategory.js";

const router = express.Router();

router.get("/", getSubCategory);
router.post("/", postSubCategory);
router.delete("/:id", deleteSubCategory);

export default router;
