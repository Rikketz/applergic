const express = require("express");
const {getProducts, postProduct, putProduct, deleteProduct, getProductsByCode} = require("../controllers/products.controllers")

const router = express.Router();

router.get("/code/:codigo", getProductsByCode);

router.get("/", getProducts)

router.post("/add", postProduct)

router.put("/:id", putProduct)

router.delete("/delete/:id", deleteProduct)

module.exports = router;