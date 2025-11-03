import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const product = await Product.create({ name, description, price, image });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
