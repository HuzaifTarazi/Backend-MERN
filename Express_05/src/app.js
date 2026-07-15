import express from "express";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

//SERVER INSTANCE CREATED
const app = express();

//MIDDLEWARE JSON CONVERTS FRONTEND DATA INTO JSON FORMAT
app.use(express.json());
app.use(cookieParser());

//Auth Api
app.use("/api/auth", authRoutes);

export default app;
