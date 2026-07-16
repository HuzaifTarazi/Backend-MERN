import UserModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
const CreatePost = async (req, res) => {
  console.log(req.body);
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "UnAuthorized" });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode)
  } catch (err) {
    return res.status(401).json({ message: "Token is invalid" });
  }

  res.json({ message: "Post created successfully" });
};

export default { CreatePost };
