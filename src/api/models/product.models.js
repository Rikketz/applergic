const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    codigo: { type: Number, required: true },
    foto: { type: String, default: "" },
    ingredientes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Alergeno",
      }
    ],
    marca: { type: String, required: true },
    alergico: { type: Boolean, default: false },
    alergenosPresentes: [{ type: String }],  
  },
  {
    timestamps: true,
  }
);

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
