import cloudinary from "../config/cloudinary.config.js";
import streamifier from "streamifier";

const cloudUpload = (buffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "Spotify_Clone",
        resource_type: "video",
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        return resolve(result);
      },
    );
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
};

export default cloudUpload;
