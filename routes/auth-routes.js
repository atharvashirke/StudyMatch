const router = require('express').Router()
const passport = require('passport')

router.get("/login", (req, res) => {
    res.send("login")
})

module.exports = router