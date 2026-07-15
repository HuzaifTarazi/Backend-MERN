import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/db/db.js";

const ExpressServer = async () => {
  try {
    await connectDB();
    app.listen(3000, () => {
      console.log("Server is Running on Port 3000...");
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

ExpressServer();
