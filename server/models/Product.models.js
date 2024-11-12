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
  finalProce: {
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
    required: true,
  },
  brand: {
    type: String,
  },
  image: {
    type: [String],
    required: true,
  },
});
