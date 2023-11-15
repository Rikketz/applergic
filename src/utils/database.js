const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://root:root@cluster0.imov6up.mongodb.net/prueba?retryWrites=true&w=majority";

const connect = async() => {
    try {
        //intenta conectarte a la base de datos
        const db = await mongoose.connect(DB_URL);
        const {name,host} = db.connection;
        console.log(`Connected to ${name} DB in host:${host}`);

    } catch (error) {
        
        console.log("i have a error",error);
    }
}

module.exports = {connect};