import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const userData = req.body;

  const appUsers = await userModel.create({
    username: userData.username,
    email: userData.email,
    password: userData.password,
  });

  const token = jwt.sign({ id: appUsers._id }, process.env.JWT_SECRET, {
    algorithm: "HS256",
  });

  res.cookie("token", token);

  res.status(201).json({
    message: "Data Posted Successfully...",
    appUsers,
  });
};

export default { registerUser };
