const express=require('express')
const router= express.Router();
const {
    registerUser,
    currentUser,
    userLogin,
  } = require("../controllers/userController");
const validateToken= require('../middleware/validateTokenHandler')

router.post("/register", registerUser)

router.post('/login', userLogin)
router.get("/current",validateToken,currentUser)

module.exports=router;