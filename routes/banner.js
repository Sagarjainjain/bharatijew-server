import express from "express";
import {
getBanner,
postBanner,
deleteBanner
} from "../controllers/banner.js";

const router = express.Router();

router.get("/", getBanner);
router.post("/", postBanner);
router.delete("/:id", deleteBanner);

export default router;
