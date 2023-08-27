import express from "express";
import {
getMelting, postMelting, deleteMelting
} from "../controllers/melting.js";

const router = express.Router();

router.get("/", getMelting);
router.post("/", postMelting);
router.delete("/:id", deleteMelting);

export default router;
