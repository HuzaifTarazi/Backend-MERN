import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Successfully..")
  } catch (err) {
    console.error("Error Starting database.", err);
  }
};

export default connectDB;
