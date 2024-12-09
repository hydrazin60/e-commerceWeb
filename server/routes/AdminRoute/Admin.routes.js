import express from "express";
import { uploadimage } from "../../middlewares/multer.js";
import { createProductPost } from "../../controller/admin/productController.js";
import isAuthenticated from "../../middlewares/isAuthenticated.js";

const AdminRouter = express.Router();
AdminRouter.post(
  "/create-product_post",
  isAuthenticated,
  uploadimage.fields([{ name: "image", maxCount: 1 }]),
  createProductPost
);

export default AdminRouter;
