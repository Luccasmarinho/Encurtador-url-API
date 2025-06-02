import express from "express";
const router = express.Router();
import createShorten from "../controllers/createShorten.js";
import redirectUrl from "../controllers/redirectUrl.js";

router.post("/shorten", createShorten);
router.get("/:shortCode", redirectUrl);

export default router