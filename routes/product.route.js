const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller');


router.get('/', getProducts);
router.get("/:id", getProducts);

router.post("/", createProduct);

//update a Product
router.put("/:id", updateProduct);

//delete a product
router.delete("/:id", deleteProduct);

module.exports = router;