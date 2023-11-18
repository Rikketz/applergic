const express = require("express");
<<<<<<< HEAD
// const cors = require('cors');
=======
const cors = require("cors"); 
>>>>>>> 04308c29b64ee92bb5d9b21499753bb268ec4111
const { connectDb } = require("./src/utils/database");
const productsRoutes = require("./src/api/routes/products.routes");
const alergenoRoutes = require("./src/api/routes/alergenos.routes");
const usersRoutes = require("./src/api/routes/users.routes");
const env = require("dotenv")
env.config()
const cloudinary = require("cloudinary").v2
          
// cloudinary.config({ 
//   cloud_name: process.env.CLOUD_NAME, 
//   api_key: process.env.API_KEY, 
//   api_secret: process.env.API_SECRET 
// });


const app = express() 
app.use(express.json());

app.use(cors());

connectDb();

cloudinary.config({ 
  cloud_name: 'df7wwsyfn', 
  api_key: '349872451519724', 
  api_secret: 'U-sHimmqsnt-8upoDdkuHn9uZC4'
});

// app.use(cors());
app.use("/product", productsRoutes);
app.use("/alergeno", alergenoRoutes);
app.use("/user", usersRoutes);

const PORT = 5053;

app.listen(PORT, () => {
    console.log("escuchando por el puerto " + PORT);
});


