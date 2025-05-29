import express from "express";
const router = express.Router();
import createShorten from "../controllers/createShorten.js";

router.post("/shorten", createShorten);

export default router