const express = require("express");
const {getProducts, postProduct} = require("../controllers/products.controllers")

const router = express.Router();

// comidaRoutes.get("/id/:id", getComidasById)
router.get("/", getProducts)

router.post("/add", postProduct)

// comidaRoutes.put("/:id", putComida)

// comidaRoutes.delete("/:id",deleteComida)

module.exports = router;