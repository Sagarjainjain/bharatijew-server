import express from "express";
import {
  getLiveSilverRate,
  postLiveSilverRate,
  deleteLiveSilverRate,
} from "../controllers/silverrate.js";

const router = express.Router();

router.get("/", getLiveSilverRate);
router.post("/", postLiveSilverRate);
router.delete("/:id", deleteLiveSilverRate);

export default router;
