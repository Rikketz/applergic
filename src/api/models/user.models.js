const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    nombreCompleto: { type: String, required: true },
    direccion: { type: String, required: false },
    telefono: { type: Number, required: true },
    foto: { type: String, default: "" },
  },
  {
    collection: "user",
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
