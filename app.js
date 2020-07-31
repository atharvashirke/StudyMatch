const express = require('express')
const app = express()

// App configuration
app.set("view engine", "ejs")
app.use(express.static("public"))

// Routes

app.get('/', (req, res) => {
    res.render('home')
})

app.listen("3000", () => {
    console.log("Server has started")
})