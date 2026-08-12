import express from "express";
import multer, { memoryStorage } from "multer";
import authMiddleware from "../middlewares/auth.middleware.js";
import musicAuthMiddleware from "../middlewares/music.middleware.js";
import musicControllers from "../controllers/music.controller.js";

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
  musicAuthMiddleware.authAlbum,
  musicControllers.createAlbum,
);

router.get("/fetch", musicAuthMiddleware.authMusic, musicControllers.getMusics);
router.get(
  "/fetch/album",
  musicAuthMiddleware.authMusic,
  musicControllers.getAlbum,
);

export default router;
