const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const choice_Schema = new Schema({
    username: { 
        type: String,
        required: true,
        unique: true,
    },
    song_choice: {
        type: String,
        required: true,
    }
},{
    timestamps: true
})


const choice_data = mongoose.model('choice_data', choice_Schema)

module.exports = choice_data