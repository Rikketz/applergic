const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    return jwt.verify(token, "lalalalalala");
}

const generarToken = (id, email) => {
    return jwt.sign({id, email}, "lalalalalala", {expiresIn: '1h'})
}

module.exports = { verifyToken, generarToken }