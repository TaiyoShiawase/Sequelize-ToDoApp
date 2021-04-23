const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')

const app = express()

app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use(session({
    secret: "esto-es-un-secreto",
    resave: false,
    saveUninitialized: false    
}));

app.use('/', userRoutes)
app.use('/tasks', taskRoutes)


app.listen(8080, () => console.log("Server is Running: PORT 8080"))