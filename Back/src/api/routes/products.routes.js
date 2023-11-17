const express = require("express");
const {cargarProducto, getProduct, putProduct, deleteProduct, getProductsByCode} = require("../controllers/products.controllers")

const router = express.Router();
const upload = require("../Middleware/upload.file")

router.get("/code/:codigo", getProductsByCode);

router.get("/", getProduct)

router.post("/add", upload.single('foto'), cargarProducto)

router.put("/:id", upload.single('foto'), putProduct)

router.delete("/delete/:id", deleteProduct)

module.exports = router;