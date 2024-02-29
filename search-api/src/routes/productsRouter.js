const express = require("express");
const productRouter = express.Router();
const productsController = require("../controllers/productsController");


productRouter.get("/products", productsController.getProducts);
productRouter.get("/detail", productsController.getProductDetail);

module.exports = productRouter;
