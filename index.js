const express = require("express");
const { connectDb } = require("./src/utils/database");
const productsRoutes = require("./src/api/routes/products.routes");

const env = require("dotenv")
env.config()

const cloudinary = require("cloudinary").v2
const app = express() 
app.use(express.json());

connectDb();

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});


app.use("/product", productsRoutes);

const PORT = 5053;

app.listen(PORT, () => {
    console.log("escuchando por el puerto " + PORT);
});


