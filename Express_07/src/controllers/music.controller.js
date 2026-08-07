import musicModel from "../models/music.model.js";
import jwt from "jsonwebtoken";



const createMusic = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "UnAuthorized...!" });
  }

  try {
    const tokenVerification = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenVerification.role !== "artist") {
      return res
        .status(403)
        .json({ message: "Don't have access to create music" });
    }
  } catch (err) {
    console.error(err);
  }

  const title = req.body;
  const file = req.file;

  

  
};

export default { createMusic };
