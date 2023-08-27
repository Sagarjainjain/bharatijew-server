import express from "express";
import {
login,
signin
} from "../controllers/auth.js";

const router = express.Router();


router.post("/login", login);
router.post("/signin", signin)


export default router;
