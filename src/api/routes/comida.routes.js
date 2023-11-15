const express = require("express");
const {getComidas,postComida,getComidasById,putComida,deleteComida} = require("../controllers/comida.controllers")

const comidaRoutes = express.Router();

comidaRoutes.get("/id/:id", getComidasById)
comidaRoutes.get("/",getComidas )

comidaRoutes.post("/", postComida)

comidaRoutes.put("/:id", putComida)

comidaRoutes.delete("/:id",deleteComida)

module.exports = comidaRoutes;