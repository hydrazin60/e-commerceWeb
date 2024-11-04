import express, { Router } from "express";
import { Login, Logout, Register } from "../controller/Auth.controllers.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const AuthRouter = express.Router();
AuthRouter.post("/register", Register);
AuthRouter.post("/login", Login);
AuthRouter.get("/logout", Logout);
AuthRouter.get("/check-auth", isAuthenticated, (req, res) => {
  const user = req.user;
  return res.status(200).json({
    success: true,
    error: false,
    message: "User is authenticated",
    user,
  });
});

export default AuthRouter;
