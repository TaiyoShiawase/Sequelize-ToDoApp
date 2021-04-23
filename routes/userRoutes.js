const express = require('express')
const router = express.Router()
const auth = require('../authentication')
const userController = require('../controller/userController')

router.get("/create_account", userController.createUserAccount)
router.get("/get_account", auth.check, userController.getUserAccount)
router.get("/update_account", userController.updateUserAccount)
router.get("/delete_account", userController.deleteUserAccount)
router.get("/login", userController.login)

module.exports = router