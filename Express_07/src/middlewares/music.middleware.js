import musicModel from "../models/music.model.js";
import albumModel from "../models/album.model.js";
import jwt from "jsonwebtoken";

const authMusic = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "UnAuthorized...!" });
  }

  try {
    const tokenVerification = jwt.verify(token, process.env.JWT_SECRET);

    if (!tokenVerification) {
      return res
        .status(401)
        .json({ message: "You are not authorized to fetch data" });
    }

    next();
  } catch (err) {
    console.error(err);
  }
};

const authAlbum = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "UnAuthorized...!" });
  }

  try {
    const tokenVerification = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenVerification.role !== "artist") {
      return res
        .status(403)
        .json({ message: "Don't have access to create an album" });
    }
    req.user = tokenVerification;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "UnAuthorized...!" });
  }
};
export default { authMusic, authAlbum };
