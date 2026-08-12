import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  const { username, email, password, role = "user" } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    if (
      isUserAlreadyExist.username === username &&
      isUserAlreadyExist.email === email
    ) {
      return res.status(409).json({ message: "User already Exists" });
    }

    if (isUserAlreadyExist.username === username) {
      return res.status(409).json({ message: "Username Already Taken..!" });
    }

    if (isUserAlreadyExist.email === email) {
      return res.status(409).json({ message: "Email Areadly Taken..!" });
    }
  }

  const hash = await bcrypt.hash(password, 10);

  const userRegisteration = await userModel.create({
    username: username,
    email: email,
    password: hash,
    role: role,
  });

  const token = jwt.sign(
    { id: userRegisteration._id, role: userRegisteration.role },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  return res.status(201).json({
    message: "User created successfully",
    user: {
      id: userRegisteration._id,
      username: userRegisteration.username,
      email: userRegisteration.email,
    },
  });
};

const loginUser = async (req, res) => {
  const { username, email, password } = req.body;

  const userLoginData = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!userLoginData) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  const passwordValidation = await bcrypt.compare(
    password,
    userLoginData.password,
  );

  if (!passwordValidation) {
    return res.status(401).json({ message: "Invalid Password..!" });
  }

  const token = await jwt.sign(
    { id: userLoginData._id, role: userLoginData.role },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "Login Successfull...",
    user: {
      username: userLoginData.username,
      email: userLoginData.email,
      role: userLoginData.role,
    },
  });
};

export default { registerUser, loginUser };
