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
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
        error: true,
      });
    }

    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        message: "User not found!! Please Go to Register",
        success: false,
        error: true,
      });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Password is incorrect!! Please try again",
        success: false,
        error: true,
      });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        role: existingUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    const userData = existingUser.toObject();
    delete userData.password;
    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .json({
        message: `Welcome ${existingUser.UserName} you are successfully logged in !!`,
        success: true,
        error: false,
        user: userData,
      });
  } catch (error) {
    console.log(`login error ${error}`);
    return res.status(500).json({
      message: error.message || "Login failed",
      success: false,
      error: true,
    });
  }
};

export const Logout = async (req, res) => {
  try {
    res
      .clearCookie("token", " ", {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .json({
        message: "Logout successful",
        success: true,
        error: false,
      });
  } catch (error) {
    console.log(`logout error ${error}`);
    return res.status(500).json({
      message: error.message || "Logout failed",
      success: false,
      error: true,
    });
  }
};
