import express, { json } from "express";
import postModel from "./models/post.model.js";
import multer, { memoryStorage } from "multer";
import uploadToCloudinary from "./utils/uploadToCloudinary.js";
import cors from "cors";
import { model } from "mongoose";

const app = express();
app.use(cors());
const upload = multer({ storage: memoryStorage() });

app.post("/create-post", upload.single("imageUrl"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        sccuess: false,
        message: "Image is required",
      });
    }
    const result = await uploadToCloudinary(req.file.buffer);

    await postModel.create({
      imageUrl: result.url,
      imageCaption: req.body.imageCaption,
    });

    return res.status(201).json({
      success: true,
      message: "Image uploaded successfully.",
      image: result.secure_url,
      publicId: result.public_id,
    });
  } catch (err) {
    console.error("Cloudinary Upload Failed: ", err);

    return res.status(500).json({
      success: false,
      message: "Failed to upload image",
      error: err.message,
    });
  }
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();

  res.status(200).json({
    success: true,
    message: "Posts Fetched Successfully",
    posts: posts,
  });
});

export default app;
