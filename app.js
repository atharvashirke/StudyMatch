const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const passport = require('passport')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth-routes.js')
const passportSetup = require('./config/passport-setup.js')

// App configuration
app.set("view engine", "ejs")
app.use(express.static("public"))

// Initializing Passport
app.use(passport.initialize())

// Connecting to Database
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true}, () => {
    console.log("Connected to Database")
}).catch(error => handleError(error));

// Routes
app.use("/auth", authRoutes)

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server has started")
})