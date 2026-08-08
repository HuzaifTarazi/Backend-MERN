import musicModel from "../models/music.model.js";
import albumModel from "../models/album.model.js";
import uploadMusic from "../utils/cloudinaryUploader.js";
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

    const MusicName = req.file.originalname;
    const file = req.file.buffer;

    const cloudUpload = await uploadMusic(file);

    const musicDBStorage = await musicModel.create({
      uri: cloudUpload.url,
      title: MusicName,
      artist: tokenVerification.id,
    });

    res.status(201).json({
      message: "Music Upload Successfully..!",
      music: {
        id: musicDBStorage.artist,
        uri: musicDBStorage.uri,
        title: musicDBStorage.title,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const createAlbum = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized access..!" });
  }
  try {
    const tokenVerification = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenVerification.role !== "artist") {
      return res
        .status(403)
        .json({ message: "You don't have access to create album..!" });
    }

    const { title, musicId } = req.body;

    const albumDBStorage = await albumModel.create({
      title: title,
      music: musicId,
      artist: tokenVerification.id,
    });

    res.status(201).json({
      message: "Album Created Successfully...!",
      album: {
        id: albumDBStorage._id,
        title: albumDBStorage.title,
        musics: albumDBStorage.music,
        artist: albumDBStorage.artist,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export default { createMusic, createAlbum };
