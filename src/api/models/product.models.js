const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    codigo: { type: Number, required: true },
    foto: { type: String, required: false },
    ingredientes: [{type: String, required: true}],
    marca: {type: String, required: true },
  },
  {
    timestamps: true, // te genera una fecha de creación y de modificación automaticas
  }
);

const Producto = mongoose.model("producto", productoSchema)

module.exports = Producto;