exports.passcomp = (req, res, next) => {
    if(req.body.password === req.body.conpassword){
        next()
    }else{
        res.render('register', {err: "Passwords didn't match"})
    }
}