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
  console.log(musicId)
  const albumDBStorage = await albumModel.create({
    title: title,
    musicId: musicId, 
    artist: req.user.id,
  });

  res.status(201).json({
    message: "Album Created Successfully...!",
    album: {
      id: albumDBStorage._id,
      title: albumDBStorage.title,
      music: albumDBStorage.musicId,
      artist: albumDBStorage.artist,
    },
  });
};

const getMusics = async (req, res) => {
  const musics = await musicModel.find().populate("artist", "username email");

  res.status(200).json({
    message: "Musics Fetched Successfully..!",
    musicDB: musics,
  });
};

const getAlbum = async (req, res) => {
  const album = await albumModel.find().populate("artist", "username email");

  res
    .status(200)
    .json({ message: "Album Fetched Successfully..!", albumDB: album });
};

export default { createMusic, createAlbum, getMusics , getAlbum};
