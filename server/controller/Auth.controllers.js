import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/User.models.js";

export const Register = async (req, res) => {
  try {
    const { UserName, email, password } = req.body;

    if (!UserName || !email || !password) {
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
      UserName,
      email,
      password: hashedPassword,
    });

    const newUserData = newUser.toObject();
    delete newUserData.password;

    return res.status(201).json({
      message: `Welcome ${newUserData.UserName} you are successfully registered !! Please Go to Login`,
      success: true,
      error: false,
      data: newUserData,
    });
  } catch (error) {
    console.log(`register error ${error}`);
    return res.status(500).json({
      message: `Something went wrong on Register User! Error: ${error.message}`,
      success: false,
      error: true,
    });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (error) {
    console.log(`login error ${error}`);
    return res.status(500).json({
      message: error.message || "Login failed",
      success: false,
      error: true,
    });
  }
};
