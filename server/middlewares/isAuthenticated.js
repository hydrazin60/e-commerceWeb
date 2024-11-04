import jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized access! Please login first",
        success: false,
        error: true,
      });
    }
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodeToken) {
      return res.status(401).json({
        message: "Unauthorized access! Please login first",
        success: false,
        error: true,
      });
    }
    req.user = decodeToken.id;
    next();
  } catch (error) {
    console.log(`isAuthenticated error ${error}`);
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
      error: true,
    });
  }
};

export default isAuthenticated;
