import "dotenv/config";
import app from "./src/app.js";
import ConnetDB from "./src/db/db.js";

const Connect_Server_DB = async () => {
  try {
    await ConnetDB();
    app.listen(3000, () => {
      console.log("Server Running on Port 3000");
    });
  } catch (err) {
    console.error("Error Occured.", err);
  }
};

Connect_Server_DB();
