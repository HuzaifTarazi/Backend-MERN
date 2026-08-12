import musicModel from "../models/music.model.js";
import albumModel from "../models/album.model.js";
import uploadMusic from "../utils/cloudinaryUploader.js";
import jwt from "jsonwebtoken";

const createMusic = async (req, res) => {
  const MusicName = req.file.originalname;
  const file = req.file.buffer;

  const cloudUpload = await uploadMusic(file);

  const musicDBStorage = await musicModel.create({
    uri: cloudUpload.url,
    title: MusicName,
    artist: req.user.id,
  });

  res.status(201).json({
    message: "Music Upload Successfully..!",
    music: {
      id: musicDBStorage.artist,
      uri: musicDBStorage.uri,
      title: musicDBStorage.title,
    },
  });
};

const createAlbum = async (req, res) => {
  const { title, musicId } = req.body;

  const albumDBStorage = await albumModel.create({
    title: title,
    music: musicId,
    artist: req.user.id,
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
};

const getMusics = async (req, res) => {

  const musics = await musicModel.find().populate("artist", "username email")

  res.status(200).json({ 
    message: "Musics Fetched Successfully..!", 
    musicDB: musics 
  });

};
export default { createMusic, createAlbum, getMusics };
