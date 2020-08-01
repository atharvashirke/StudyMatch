const mongoose = require('mongoose')

userSchema = new mongoose.Schema({
    name: String,
    email: String,
    major: String,
    year: String,
    pronouns: String,
    facebook: String,
    instagram: String,
    courses: [String],
    professionalInterests: [String],
    personalInterests: [String]
})

module.exports = mongoose.model('User', userSchema)