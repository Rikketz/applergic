
const express = require("express");
const {register, login, profile, registerEmergencyContact, updateAlergias} = require("../controllers/users.controllers");
const router = express.Router()
const upload = require("../Middleware/upload.file")
const usersController = require('../controllers/users.controllers');

router.post("/register", upload.single('foto'), register);
router.post("/login" , login);
router.put('/register-emergency-contact/:userId', registerEmergencyContact);
router.put('/alergia/:userId', updateAlergias);

module.exports = router;


