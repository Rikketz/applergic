const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    codigo: { type: Number, required: true },
    foto: {type: String, default: ""},
    ingredientes: [{type: String, required: true}],
    marca: {type: String, required: true },
    // alergenos: [{ type: Schema.Types.ObjectId, ref: 'alergeno' }],
  },
  {
    timestamps: true, // te genera una fecha de creación y de modificación automaticas
  }
);

const Producto = mongoose.model("producto", productoSchema)

module.exports = Producto;