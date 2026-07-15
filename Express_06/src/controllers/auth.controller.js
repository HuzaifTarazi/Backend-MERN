import UserModel from "../model/user.model.js";

const RegisterUser = (req, res) => {
  const userData = req.body;
  console.log(userData);
  res.status(201).json({message: "Successfully created"})
};

export default { RegisterUser };
