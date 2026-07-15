import express from "express";
import authRouters from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

//Server Instance Created.
const app = express();

//MiddleWare
app.use(express.json());
app.use(cookieParser())

//Auth Routes
app.use("/api/auth/", authRouters);

export default app;
