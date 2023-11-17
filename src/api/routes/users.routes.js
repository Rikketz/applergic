
const express = require("express");
const {register, login, profile} = require("../controllers/users.controllers");
const router = express.Router()



router.post("/register", register);
router.post("/login" , login);

module.exports = router;