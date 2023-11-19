
const express = require("express");
const {register, login} = require("../controllers/users.controllers");
const router = express.Router()
const upload = require("../Middleware/upload.file")



router.post("/register", upload.single('foto'), register);
router.post("/login" , login);

module.exports = router;