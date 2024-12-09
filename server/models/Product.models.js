import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  salePrice: {
    type: Number,
    required: true,
  },
  totalStock: {
    type: Number,
    required: true,
  },
  offer: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Men", "Women", "Kids", "Accessories", "kitchen", "electronics"],
  },
  brand: {
    type: String,
    enum: [
      "Nike",
      "Adidas",
      "Puma",
      "Levi's",
      "Zara",
      "H&M",
      "Reebok",
      "Gucci",
      "Versace",
      "Chanel",
      "Prada",
      "Louis Vuitton",
    ],
  },
  image: {
    type: String,
    required: true,
  },
});

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;
