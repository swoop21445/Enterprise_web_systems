const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_Schema = new Schema({
    username: { 
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlenght:3
    },
},{
    timestamps: true
})

const User = mongoose.model('User', user_Schema)

module.exports = User