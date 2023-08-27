import express from "express";
import {
getLiveGoldRate,
postLiveGoldRate,
deleteLiveGoldRate
} from "../controllers/goldrate.js";

const router = express.Router();

router.get("/", getLiveGoldRate );
router.post("/", postLiveGoldRate);
router.delete("/:id", deleteLiveGoldRate);

export default router;
