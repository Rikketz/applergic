const express = require("express");
<<<<<<< HEAD
const {
  register,
  login,
  profile,
} = require("../controllers/users.controllers");
const router = express.Router();
=======
const {register, login, profile} = require("../controllers/users.controllers");
const router = express.Router()
const upload = require("../Middleware/upload.file")
>>>>>>> 04308c29b64ee92bb5d9b21499753bb268ec4111

router.post("/register", upload.single('foto'), register);
router.post("/login", login);

<<<<<<< HEAD
module.exports = router;
=======
router.post("/register", upload.single('foto'), register);
router.post("/login" , login);

module.exports = router;
>>>>>>> 04308c29b64ee92bb5d9b21499753bb268ec4111
