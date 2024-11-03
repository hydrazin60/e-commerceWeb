import express from "express";
import { Register } from "../controller/Auth.controllers.js";
const AuthRouter = express.Router();
AuthRouter.post("/register", Register);

export default AuthRouter;
