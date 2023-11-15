const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://ceciliaarangio:ImD36nKx8JXs58L6@cluster0.4g316yu.mongodb.net/Applergic?retryWrites=true&w=majority";

const connectDb = async() => {
    try {
        //intenta conectarte a la base de datos
        const db = await mongoose.connect(DB_URL);
        const {name,host} = db.connection;
        console.log(`Connected to ${name} DB in host:${host}`);

    } catch (error) {
        
        console.log("i have a error",error);
    }
}

module.exports = {connectDb};