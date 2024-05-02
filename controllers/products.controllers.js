import { Product } from "../models/product.model.js";

export const addProduct = async (req, res, next) => {
  const { name, quantity, price, image } = req.body;
  try {
    const product = await Product.create({ name, quantity, price, image });
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const allProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

//update a product
export const updateProduct = async (req, res, next) => {
  const { name, quantity, price, image } = req.body;
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, {
      name,
      quantity,
      price,
      image,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

//delete a product
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Prouduct deleted" });
  } catch (error) {
    next(error);
  }
};
