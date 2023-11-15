const express = require("express");
const {getProducts, postProduct, putProduct, deleteProduct} = require("../controllers/products.controllers")

const router = express.Router();

// comidaRoutes.get("/id/:id", getComidasById)
router.get("/", getProducts)

router.post("/add", postProduct)

router.put("/:id", putProduct)

router.delete("/delete/:id", deleteProduct)

module.exports = router;