const Producto = require("../models/product.models");

const getProducts = async (req, res) => {
  try {
    const allProducts = await Producto.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getProductsByCode = async (req, res) => {
  try {
    const { codigo } = req.params;
    const product = await Producto.findOne({ codigo: parseInt(codigo) });
    
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado con ese código" });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error("Error al buscar producto por código:", error);
    return res.status(500).json({ message: "Error interno del servidor al buscar producto por código", error: error.message });
  }
};

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
const putProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const putProduct = new Producto(req.body);
    putProduct._id = id;
    const updatedProduct = await Producto.findByIdAndUpdate(id, putProduct, {
      new: true,
    });
    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteProduct = async (req, res) => {
  try {
      const {id} = req.params;   //recibo el id por parametro
      const deleteProducto = await Producto.findByIdAndDelete(id)
      if(!deleteProducto){
          return res.status(404).json({message:"estudiante no existe"})
      }
      return res.status(200).json(deleteProducto)
  } catch (error) {
      
  }
}

module.exports = { getProducts, postProduct, putProduct, deleteProduct, getProductsByCode};
