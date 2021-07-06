const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    console.log(error);
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, category, price, stock, imgUrl } = req.body;
    const product = await new Product({ name, category, price, stock, imgUrl });
    const productSaved = await product.save();
    res.status(201).send(productSaved);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  addProduct,
};
