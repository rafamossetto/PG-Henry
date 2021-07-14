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
    const { name, category, price, stock, imgUrl, combo } = req.body;
    const product = await new Product({
      name,
      category,
      price,
      stock,
      imgUrl,
      combo,
    });
    const productSaved = await product.save();
    res.status(201).send(productSaved);
  } catch (error) {
    console.log(error);
  }
};

const modProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    Product.updateOne({name: name}, {
      $set: price
    },
    function(err, inf) {
      if (err) {
        res.status(404).json({
          msg: "The update didn't succeed", err
        });
      } else {
        res.status(200).json({inf});
      }
    })
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getProducts,
  addProduct,
  modProduct,
};
