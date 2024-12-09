import UserModel from "../../models/User.models.js";
import getDataUri from "../../utils/datauri.js";

export const createProductPost = async (req, res) => {
  try {
    const {
      productName,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
      offer,
    } = req.body;
    const { image } = req.files;
    const authorUserId = req.user.id;
    console.log(authorUserId);
    
    const AdminUser = await UserModel.findById(authorUserId);
    if (!AdminUser) {
      return res.status(401).json({
        message: "Unauthorized access! Please login first",
        success: false,
        error: true,
      });
    }

    if (AdminUser.role !== "admin") {
      return res.status(401).json({
        message: "Unauthorized access! Please login first",
        success: false,
        error: true,
      });
    }
    if (!productName || !description || !price || !salePrice || !totalStock) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
        error: true,
      });
    }
    if (!image || !image[0]) {
      return res.status(400).json({
        message: "Image is required",
        success: false,
        error: true,
      });
    }

    // const DataUri = getDataUri(image);
    // console.log(DataUri);

    // console.log(productName);
  } catch (error) {
    console.log(`createProductPost error ${error}`);
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
      error: true,
    });
  }
};
