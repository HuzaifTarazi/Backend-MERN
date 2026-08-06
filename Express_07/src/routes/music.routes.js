import express from "express";
import musicControllers from "../controllers/music.controller.js";

const router = express.Router();

router.post("/create", musicControllers.createMusic);

export default router;
