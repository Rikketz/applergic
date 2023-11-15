const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const comidaSchema = new Schema(
  {
    nombre: { type: String, required: true },
    pais: { type: String, required: true },
    foto: { type: String, required: false },
  },
  {
    timestamps: true, // te genera una fecha de creación y de modificación automaticas
  }
);

const Comida = mongoose.model("comida", comidaSchema)

module.exports = Comida;
