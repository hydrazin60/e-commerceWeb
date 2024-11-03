import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/User.models.js";

export const Register = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    if (!userName || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
        error: true,
      });
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists !! Please Go to Login",
        success: false,
        error: true,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      userName,
      email,
      password: hashedPassword,
    });

    const newUserData = newUser.toObject();
    delete newUserData.password;

    return res.status(201).json({
      message: `Welcome ${newUserData.userName} you are successfully registered !! Please Go to Login`,
      success: true,
      error: false,
      data: newUserData,
    });
  } catch (error) {
    console.log(`register error ${error}`);
    return res.status(500).json({
      message: error.message || "Register failed",
      success: false,
      error: true,
    });
  }
};
