const { Schema, model} = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: String,
    password: Number
}, {
    timestamps: true
})

module.exports = model('User', userSchema)