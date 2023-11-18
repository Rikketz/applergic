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

<<<<<<< HEAD
const User = mongoose.model("user", userSchema);
=======
const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    nombreCompleto: {type: String, required: true},
    direccion: {type: String, required: true},
    telefono: {type: Number, required: true},
    foto: {type: String, default: ""},
    alergia: [{type: Schema.Types.ObjectId, ref: "Alergeno", required: false}]
},{
    collection: "user"
});
>>>>>>> 04308c29b64ee92bb5d9b21499753bb268ec4111

module.exports = User;
