const express= require("express")
const { signupValidation, loginValidation } = require("../Middleware/authValidation")
const { signUp, logIn, userProfile } = require("../Controller/authController")
const route= express.Router()

route.post('/signup',signupValidation,signUp)
route.post('/login',loginValidation,logIn)
route.get('/profile',userProfile)

module.exports=route