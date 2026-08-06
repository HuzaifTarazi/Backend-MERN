import express from "express";
import authControllers from "../controllers/auth.controller.js";
const router = express.Router();

//Resgier Api
router.post("/register", authControllers.registerUser);
router.post("/login", authControllers.loginUser )

export default router;
