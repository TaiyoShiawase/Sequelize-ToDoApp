const express = require('express')
const router = express.Router()
const auth = require('../authentication')
const userController = require('../controller/userController')


router.get("/", (req, res) => {
    res.render('login')
})

router.get("/register", (req,res) => {
    res.render('register')
})

router.post("/create_account", auth.passcomp, userController.createUserAccount)
router.post("/login", userController.login)

router.get("/logout", (req, res) => {
    req.session.destroy()
    res.render('login')
})


module.exports = router