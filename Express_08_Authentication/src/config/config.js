import { configDotenv } from "dotenv";
configDotenv();

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URL is not available");
}


const config = { MONGO_URI: process.env.MONGO_URI };

export default config;
