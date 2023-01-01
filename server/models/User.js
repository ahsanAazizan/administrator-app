const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: [25, 'name too long'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: [25, 'name too long'],
    },
    gender: {
        type: String
    },
    active: {
        type: String
    }
})

module.exports = mongoose.model('User', user_schema)

