import cookieParser from "cookie-parser";
import express, { application } from "express";
import authRoutes from "./routes/auth.routes.js";
import musicRoutes from "./routes/music.routes.js";
//Server Instance Created.
const app = express();

//Middlewares

//Get data in json format
app.use(express.json());
//Get cookie data from frontend
app.use(cookieParser());

//Auth Routes
app.use("/api/auth/", authRoutes);

//Music Creation
app.use("/api/music", musicRoutes);

export default app;
