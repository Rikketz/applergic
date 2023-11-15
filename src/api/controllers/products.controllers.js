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
      const body = req.body;  
      const newProduct = new Producto (body); 
      if(req.file.path){
        newProduct.foto = req.file.path
      }
      const createdProduct = await newProduct.save();

      return res.json(createdProduct);
  } catch (error) {
      return res.json(error);
  }
}

const updateStudent = async (req, res) => {
  try {
      const {id} = req.params    
      const productBody = new Producto (req.body);
      productBody._id = id;
      const updateProduct= await Producto.findByIdAndUpdate(id, productBody, {new:true});  //necesita 2 param, el id del doc a modificar
      
      if(!updateProduct){
          return res.status(404).json({message:"estudiante no existe"})
      }
      return res.status(200).json(updateProduct)
  } catch (error) {
      
  }
}

const deleteProduct = async (req, res) => {
  try {
      const {id} = req.params;   
      const deleteProducto = await Producto.findByIdAndDelete(id)
      if(!deleteProducto){
          return res.status(404).json({message:"estudiante no existe"})
      }
      return res.status(200).json(deleteProducto)
  } catch (error) {
      
  }
}

module.exports = { getProducts, postProduct, updateStudent, deleteProduct, getProductsByCode};

