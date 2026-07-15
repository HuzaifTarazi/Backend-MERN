import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/db/db.js";

const Server_DB_Connection = async () => {
  try {
    await connectDB();
    app.listen(3000, () => {
      console.log("Server Started Successfully.");
    });
  } catch (err) {
    console.error("Error Occured..", err);
  }
};

Server_DB_Connection();
