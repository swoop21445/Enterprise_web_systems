const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const choice_Schema = new Schema({
    user: { 
        type: String,
        required: true,
    },
    song: {
        type: String,
    }
},{
    timestamps: false
})


const choice_data = mongoose.model('choice_data', choice_Schema)

module.exports = choice_data