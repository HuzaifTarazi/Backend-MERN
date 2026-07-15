import express from "express";
import authRouters from "./routes/auth.routes.js";

//Server Instance Created.
const app = express();

//MiddleWare
app.use(express.json());

app.use("/api/auth/", authRouters);

export default app;
