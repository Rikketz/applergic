const express = require("express");
const {connect} = require("./src/utils/database");
const comidaRoutes = require("./src/api/routes/comida.routes")

const PORT = 5000;
const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/comidas", comidaRoutes)

app.listen(PORT, ()=> console.log(`listening in the port http://localhost:${PORT}`))


