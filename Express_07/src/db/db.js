import mongoose from "mongoose";

const ConnetDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Successfully.");
  } catch (err) {
    console.log("Error Connecting Database", err);
  }
};

export default ConnetDB;
