import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  music: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "musics",
      required: true,
    },
  ],
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const albumModel = mongoose.model("album", albumSchema);

export default albumModel;
