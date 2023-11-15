const express = require("express");
const {getProducts, postProduct, updateStudent, deleteProduct, getProductsByCode} = require("../controllers/products.controllers")

const router = express.Router();
const upload = require("../Middleware/upload.file")

router.get("/code/:codigo", getProductsByCode);

router.get("/", getProducts)

router.post("/add", upload.single('foto'), postProduct)

router.put("/:id", upload.single('foto'), updateStudent)

router.delete("/delete/:id", deleteProduct)

module.exports = router;