const express = require('express')
const router = express.Router()
const auth = require('../authentication')
const taskController = require('../controller/taskController')


router.get("/", taskController.getTasks)
router.get("/add", taskController.addTask)
router.get("/finished", taskController.finishedTask)
router.get("/deleteTask", taskController.deleteFinishedTask)

// router.get("/register", (req,res) => {
//     res.render('register')
// })

// router.post("/create_account", auth.passcomp, userController.createUserAccount)
// router.post("/login", userController.login)
// router.get("/get_account", auth.check, userController.getUserAccount)

// router.get("/delete_account", userController.deleteUserAccount)

module.exports = router