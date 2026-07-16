import express from "express";
import postController from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create-post", postController.CreatePost);

export default router;
