import express from "express";
import {
  getProductBySearch,
  getProduct,
  getProductbyid,
  postProduct,
  deleteProduct,
} from "../controllers/product.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search?", getProductBySearch);
router.get("/", getProduct);
router.get("/:id", getProductbyid);
router.post("/", postProduct);
router.delete("/:id", deleteProduct);

export default router;
