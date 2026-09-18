import express from "express";
import morgan from "morgan"
import env from "./config/config.js"
const app = express();

app.use(express.json())
app.use(morgan("dev"))


console.log(env)


export default app;
