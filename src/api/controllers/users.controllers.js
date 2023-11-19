const cloudinary = require('cloudinary').v2;  // Importa la biblioteca Cloudinary
const bcrypt = require('bcrypt');
const { validateEmailDB } = require('../../utils/validator');
const { generarToken } = require('../../utils/jwt');
const User = require('../models/user.models');
const multer = require('multer');


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const register = async (req, res) => {
  try {
    console.log('Received data:', req.body);
    const { email, password, nombreCompleto, direccion, telefono , foto} = req.body;
    console.log('Received Image:', req.file);
    // Verificar si se proporciona una foto como archivo
    let fotoUrl = '';
    let cloudinaryImageUrl = ''; // Nueva variable para la URL de Cloudinary


  
    if (req.file) {
      const cloudinaryResult = await cloudinary.uploader.upload(req.file.path);
      cloudinaryImageUrl = cloudinaryResult.secure_url;
      fotoUrl = cloudinaryImageUrl;
      console.log('Cloudinary Image URL:', cloudinaryImageUrl);
    }

    // Verificar si se proporciona una foto como URL
    if (req.body.fotoUrl) {
      fotoUrl = req.body.fotoUrl;
    }

    if (!email || !password || !nombreCompleto || !direccion || !telefono) {
      return res.status(400).json({ success: false, message: "Todos los campos son requeridos" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "El formato del correo electrónico no es válido" });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, message: "La contraseña debe tener al menos 6 caracteres" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userBody = new User({
      email,
      password: hashedPassword,
      nombreCompleto,
      direccion,
      telefono,
      foto: fotoUrl,  // Guardar la URL de la foto
      cloudinaryImage: cloudinaryImageUrl, // Guardar la URL de Cloudinary
    });

    const createdUser = await userBody.save();

    return res.status(201).json({ success: true, message: "Usuario registrado con éxito", data: createdUser });
  } catch (error) {
    console.error('Error en el registro:', error);
    return res.status(500).json({ success: false, message: "Error interno del servidor", error: error.message });
  }
};


const login = async (req, res) => {
    try {
        const userInfo = req.body;
        const userDB = await validateEmailDB(userInfo.email);
        if(!userDB){ 
            return res.json({succes: false, message : "Email no existe"})
        }
        if(!bycrypt.compareSync(userInfo.password, userDB.password)){
            return res.json({succes: false, message : "La contraseña no coincide"})
        }

        const token = generarToken(userDB._id, userDB.email);
        return res.json({succes: true, message : "Esta ok", token: token, userInfo: userDB})
    } catch (error) {
        
    }
}


module.exports = upload;
module.exports = {register, login}