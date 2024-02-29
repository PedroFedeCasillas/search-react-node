const products = require("../utils/data.json");

const getProducts = (req, res) => {
  if (products.length > 0) {
    res.status(202).json(products);
  } else {
    res.status(404).json({ message: "Products not found" });
  }
};

const getProductDetail = (req, res) => {
  const { id } = req.query;
  if (products.length > 0) {
    const product = products.find((e) => e.id === Number(id));
    if (product) {
      res.status(202).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } else {
    res.status(404).json({ message: "Products not found" });
  }
};

module.exports = {
  getProducts,
  getProductDetail,
};