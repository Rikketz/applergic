const express = require("express");
const { connectDb } = require("./src/utils/database");
const productsRoutes = require("./src/api/routes/products.routes");
const alergenoRoutes = require("./src/api/routes/alergenos.routes");


const env = require("dotenv")
env.config()

const cloudinary = require("cloudinary").v2
const app = express() 
app.use(express.json());

connectDb();

cloudinary.config({ 
  cloud_name: 'df7wwsyfn', 
  api_key: '349872451519724', 
  api_secret: 'U-sHimmqsnt-8upoDdkuHn9uZC4'
});


app.use("/product", productsRoutes);
app.use("/alergeno", alergenoRoutes);

const PORT = 5053;

app.listen(PORT, () => {
    console.log("escuchando por el puerto " + PORT);
});


