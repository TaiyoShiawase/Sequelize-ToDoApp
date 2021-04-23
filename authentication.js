const express = require('express')
const app = express()

exports.check = (req, res, next) => {
    if(req.query.id){
        next()
    }else{
        res.send('NO ID ENTRY')
    }
}