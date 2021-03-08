const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongoDB database connection established")
})

const usersrouter =  require('./routes/users')

app.use('/users', usersrouter)

app.listen(port, () => {
    console.log(`server active on: ${port}`);
});