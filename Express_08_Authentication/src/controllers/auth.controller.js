import userModel from "../models/user.model.js";

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { password }],
  });

  if (isUserAlreadyExist) {
    if (
      isUserAlreadyExist.username === username &&
      isUserAlreadyExist.email === email
    ) {
      res
        .status(409)
        .json({ message: "User Already Exists With This Credentials." });
    }
    if (isUserAlreadyExist.username === username) {
      res.status(409).json({ message: "Username not available" });
    }

    if (isUserAlreadyExist.email === email) {
      res.status(409).json({ message: "email not available" });
    }
  }

  await userModel.create({
    username: username,
    email: email,
    password: password,
  });

  res.status(201).json({ message: "user created Successfully." });
};

export default { register };
