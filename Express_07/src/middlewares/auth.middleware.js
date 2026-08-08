import jwt from "jsonwebtoken";

const authArtist = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "UnAuthorized...!" });
  }

  try {
    const tokenVerification = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenVerification.role !== "artist") {
      return res
        .status(403)
        .json({ message: "Don't have access to create music" });
    }
    req.user = tokenVerification
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "UnAuthorized...!" });
  }
};

export default { authArtist };
