const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_Schema = new Schema({
    username: { 
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlenght:3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3
    },
    song :{
        type: String,
    },
    admin:{
        type: Boolean,
    }
},{
    timestamps: true
})

const User = mongoose.model('User', user_Schema)

module.exports = User