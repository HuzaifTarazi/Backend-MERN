import express from "express";
import musicControllers from "../controllers/music.controller.js";
import multer, { memoryStorage } from "multer";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

const upload = multer({ storage: memoryStorage() });

router.post(
  "/create",
  authMiddleware.authArtist,
  upload.single("audioFile"),
  musicControllers.createMusic,
);

router.post(
  "/album/create",
  authMiddleware.authArtist,
  musicControllers.createAlbum,
);
export default router;
