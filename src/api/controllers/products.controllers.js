const Producto = require("../models/product.models");

const getProducts = async (req, res) => {
  try {
    const allProducts = await Producto.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// const getComidasById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const comida = await Comida.findById(id);
//     if (!comida) {
//       return res.status(404).json({ message: "no tenemos comidas con ese id" });
//     }
//     return res.status(200).json(comida);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };
const postProduct = async (req, res) => {  //tiene q ser asincrona 
  //porque se ocnecta con la base de datos
  try {
      const body = req.body;  //aqui recibe algo por el body
      const product = new Producto (body); //aqui
      if(req.file.path){
          product.image = req.file.path
      }
      const createdProduct = await product.save();
      //el save es la funcion de mongoose q me permite guardar
      //en la base de datos, la informacion.
      return res.json(createdProduct);
  } catch (error) {
      return res.json(error);
  }
}
// const putComida = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const putComida = new Comida(req.body);
//     putComida._id = id;
//     const updatedComida = await Comida.findByIdAndUpdate(id, putComida, {
//       new: true,
//     });
//     return res.status(200).json(updatedComida);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };
// const deleteComida = async(req,res) => {
//     try {
//         const {id} = req.params;
//         const deleteComida = await Comida.findByIdAndDelete(id);
//         return res.status(200).json(deleteComida)
//     } catch (error) {
//         return res.status(500).json(error)
//     }
// }

module.exports = { getProducts, postProduct};
