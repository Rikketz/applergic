<<<<<<< HEAD
const User = require("../models/user.models");
const { validateEmailDB } = require("../../utils/validator");
const cloudinary = require("cloudinary").v2;
const bycrypt = require("bcrypt");
const { generarToken } = require("../../utils/jwt");

const bcrypt = require("bcrypt");
=======
const cloudinary = require('cloudinary').v2;  // Importa la biblioteca Cloudinary
const bcrypt = require('bcrypt');
const { validateEmailDB } = require('../../utils/validator');
const { generarToken } = require('../../utils/jwt');
const User = require('../models/user.models');



// const register = async (req, res) => {
//   try {
//     const { email, password, nombreCompleto, direccion, telefono } = req.body;

//     if (!email || !password || !nombreCompleto || !direccion || !telefono) {
//       return res.status(400).json({ success: false, message: "Todos los campos son requeridos" });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ success: false, message: "El formato del correo electrónico no es válido" });
//     }

//     if (password.length < 6) {
//       return res.status(400).json({ success: false, message: "La contraseña debe tener al menos 6 caracteres" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const userBody = new User({
//       email,
//       password: hashedPassword,
//       nombreCompleto,
//       direccion,
//       telefono,
//     });

//     const createdUser = await userBody.save();

//     return res.status(201).json({ success: true, message: "Usuario registrado con éxito", data: createdUser });
//   } catch (error) {
//     console.error('Error en el registro:', error);
//     return res.status(500).json({ success: false, message: "Error interno del servidor", error: error.message });
//   }
// };
>>>>>>> 04308c29b64ee92bb5d9b21499753bb268ec4111

const register = async (req, res) => {
  try {
    const { email, password, nombreCompleto, direccion, telefono } = req.body;

    // Verificar si se proporciona una foto como archivo
<<<<<<< HEAD
    let fotoUrl = "";
=======
    let fotoUrl = '';
>>>>>>> 04308c29b64ee92bb5d9b21499753bb268ec4111
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      fotoUrl = result.secure_url;
    }

    // Verificar si se proporciona una foto como URL
    if (req.body.fotoUrl) {
      fotoUrl = req.body.fotoUrl;
    }

    if (!email || !password || !nombreCompleto || !direccion || !telefono) {
      return res
        .status(400)
        .json({ success: false, message: "Todos los campos son requeridos" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({
          success: false,
          message: "El formato del correo electrónico no es válido",
        });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({
          success: false,
          message: "La contraseña debe tener al menos 6 caracteres",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userBody = new User({
      email,
      password: hashedPassword,
      nombreCompleto,
      direccion,
      telefono,
<<<<<<< HEAD
      foto: fotoUrl
=======
      foto: fotoUrl,  // Guardar la URL de la foto
>>>>>>> 04308c29b64ee92bb5d9b21499753bb268ec4111
    });

    const createdUser = await userBody.save();

    return res
      .status(201)
      .json({
        success: true,
        message: "Usuario registrado con éxito",
        data: createdUser,
      });
  } catch (error) {
    console.error("Error en el registro:", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Error interno del servidor",
        error: error.message,
      });
  }
};

const login = async (req, res) => {
  try {
    const userInfo = req.body;
    const userDB = await validateEmailDB(userInfo.email);
    if (!userDB) {
      return res.json({ succes: false, message: "Email no existe" });
    }
    if (!bycrypt.compareSync(userInfo.password, userDB.password)) {
      return res.json({ succes: false, message: "La contraseña no coincide" });
    }

    const token = generarToken(userDB._id, userDB.email);
    return res.json({
      succes: true,
      message: "Esta ok",
      token: token,
      userInfo: userDB,
    });
  } catch (error) {}
};

<<<<<<< HEAD
module.exports = { register, login };
=======

module.exports = {register, login}
>>>>>>> 04308c29b64ee92bb5d9b21499753bb268ec4111
