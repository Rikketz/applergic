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
const postProduct = async (req, res) => {
  try {
    const newProduct = new Producto(req.body);
    const createdProduct = await newProduct.save();
    return res.status(201).json({ message: "Producto creado exitosamente", data: createdProduct });
  } catch (error) {
    console.error("Error al crear el producto:", error);
    return res.status(500).json({ message: "Error interno del servidor al crear el producto", error: error.message });
  }
};
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
