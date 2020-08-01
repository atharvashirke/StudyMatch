const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

// App configuration
app.set("view engine", "ejs")
app.use(express.static("public"))

// Connecting to Database
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true}, () => {
    console.log("Connected to Database")
}).catch(error => handleError(error));

// Routes
app.get('/', (req, res) => {
    res.render('home')
})

app.listen("3000", () => {
    console.log("Server has started")
})