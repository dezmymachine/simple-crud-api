import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: [true, "Please enter product name"] },
    quantity: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    image: { type: String, required: false },
  },
  { timestamps: true }
);
export const Product = model("Product", productSchema, "products");
