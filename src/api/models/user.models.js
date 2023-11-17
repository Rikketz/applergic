const mongoose = require ("mongoose");  //esto se llama esquema, se crea 1ro

const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    nombreCompleto: {type: String, required: true},
    direccion: {type: String, required: true},
    telefono: {type: Number, required: true},
},{
    collection: "user"
});

//string, number, array, date, mixed, boolean, ObjectId (tipo dato identificador)

const User = mongoose.model("user", userSchema)  //1ro digo la coleccion q tengo en mongo y 2do cual es la estructura

module.exports = User;