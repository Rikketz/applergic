const {verifyToken} = require("../../utils/jwt");
const User = require("../models/user.models");

const isAuth = async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        if(!auth){
            return res.status(400).json({message : "No autorizado"})
        }
        const token = auth.split(" ")[1]; //me convierte a array, y le digo la posicion que quiero
        //asi solo me devuelve el token
        const tokenVerified = verifyToken(token)

        if(!tokenVerified.id){
            return res.status(400).json({message : "No autorizado", message: tokenVerified})
        }
        //busco en el modelo de datos, por el id de usuario para que me de la info completa ademas del token
        const userProfile = await User.findById(tokenVerified)

        req.userProfile = userProfile;
        next();
    } catch (error) {
        
    }
}

module.exports = {isAuth}