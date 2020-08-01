const passport = require('passport')
const localStrategy = require("passport-local")
const passportLocalMongoose = require("passport-local-mongoose")
const User = require('../models/user.js')