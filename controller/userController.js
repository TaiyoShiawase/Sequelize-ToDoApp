const uuid = require('uuid')
const bcrypt = require('bcrypt')
const user = require('../models/user')

exports.createUserAccount = async (req, res) => {
    req.body.uuid = uuid.v4()
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    req.body.password = hashedPassword

    let created_account = await user.model.create(
        req.body
    ).catch((err) => {
        res.render('register', {err: "Username Already Taken."})
    })
       
    res.render('login', {completed: "Successfully Registered."})
    console.log(created_account)
}

exports.login = async (req, res) => {
    let user_account = await user.model.findOne({
        where: {
            username: req.body.username,
        },
        raw:true,
    })

    if(user_account != null){
        bcrypt.compare(req.body.password, user_account.password, (err, result) => {
            if(result === true){
                req.session.loggedIn = true;
                req.session.uuid = user_account.uuid;
                res.redirect('/tasks')
            }else{
            res.render('login', {err: "Incorrect Password."})
            }
        })
    }else{
        res.render('login', {err: "Incorrect Username."})
    }

    console.log(user_account)
}

