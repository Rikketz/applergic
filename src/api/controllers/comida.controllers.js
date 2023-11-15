const Comida = require("../models/comida.models");

const getComidas = async (req, res) => {
  try {
    const allComidas = await Comida.find();
    return res.status(200).json(allComidas);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getComidasById = async (req, res) => {
  try {
    const { id } = req.params;
    const comida = await Comida.findById(id);
    if (!comida) {
      return res.status(404).json({ message: "no tenemos comidas con ese id" });
    }
    return res.status(200).json(comida);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postComida = async (req, res) => {
  try {
    const newComida = new Comida(req.body);
    const createdComida = await newComida.save();
    return res.status(201).json(createdComida);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putComida = async (req, res) => {
  try {
    const { id } = req.params;
    const putComida = new Comida(req.body);
    putComida._id = id;
    const updatedComida = await Comida.findByIdAndUpdate(id, putComida, {
      new: true,
    });
    return res.status(200).json(updatedComida);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteComida = async(req,res) => {
    try {
        const {id} = req.params;
        const deleteComida = await Comida.findByIdAndDelete(id);
        return res.status(200).json(deleteComida)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = { getComidas, getComidasById, postComida , putComida, deleteComida};
