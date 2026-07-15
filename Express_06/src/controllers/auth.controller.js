import UserModel from "../model/user.model.js";
import jwt from "jsonwebtoken";

const RegisterUser = async (req, res) => {
  const userData = req.body;

  const Users = await UserModel.create({
    username: userData.username,
    email: userData.email,
    password: userData.password,
  });
  const token = jwt.sign({ id: Users._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(201).json({ message: "Data Posted Successfully", Users });
};

export default { RegisterUser };
