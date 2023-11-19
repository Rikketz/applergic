
const express = require("express");
const {register, login, profile, registerEmergencyContact, getUserById} = require("../controllers/users.controllers");
const router = express.Router()
const upload = require("../Middleware/upload.file");

router.post("/register", upload.single('foto'), register);
router.post("/login" , login);
router.put('/register-emergency-contact/:userId', registerEmergencyContact);
router.get('/getuser/:userId', getUserById);

module.exports = router;


