import express from "express";
import {
getTopPost,
postTopPost,
deleteTopPost
} from "../controllers/topost.js";

const router = express.Router();

router.get("/", getTopPost);
router.post("/", postTopPost);
router.delete("/:id", deleteTopPost);

export default router;
