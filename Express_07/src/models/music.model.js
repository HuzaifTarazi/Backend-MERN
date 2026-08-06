import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const musicModel = mongoose.model("musics", musicSchema);

export default musicModel;
