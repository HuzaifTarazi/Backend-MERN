import mongoose from "mongoose";

const albumSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  music: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "music",
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
