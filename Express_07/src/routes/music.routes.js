import express from "express";
import musicControllers from "../controllers/music.controller.js";
import multer, { memoryStorage } from "multer";

const router = express.Router();

const upload = multer({ storage: memoryStorage() });

router.post(
  "/create",
  upload.single("audioFile"),
  musicControllers.createMusic,
);

export default router;
