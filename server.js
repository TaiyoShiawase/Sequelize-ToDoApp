const express = require('express')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/userRoutes')

const app = express()

app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use('/', userRoutes)

app.listen(8080, () => console.log("Server is Running: PORT 8080"))