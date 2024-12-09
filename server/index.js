import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import AuthRouter from "./routes/Auth.routes.js";
import AdminRouter from "./routes/AdminRoute/Admin.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/e~commerce/api/v1/jbn/auth", AuthRouter);
app.use("/e~commerce/api/v1/jbn/admin", AdminRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
