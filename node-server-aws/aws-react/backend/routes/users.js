const router = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/login').post((req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.json("responce: " + username + " " + password)
})

router.route('/register').post((req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const new_user = new User({username, password});

    new_user.save()
        .then(() => res.json("user registered successfully"))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route('/add').post((req,res) => {
    const username = req.body.username;

    const new_user = new User({username});

    new_user.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;