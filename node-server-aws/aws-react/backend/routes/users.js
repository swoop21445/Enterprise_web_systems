const router = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/login').post((req,res) => {
    const user = req.body.username;
    console.log(user)
    const pass = req.body.password;
    console.log(pass)
    let search = User.findOne({username: user})
        .then(login_data => {if (login_data.password === pass){
            console.log(login_data.password)
            res.json({auth:true,
            id:login_data.id})
            console.log("auth passed")
        } else {
            res.json({auth:false})
            console.log("auth failed")
        }})
        .catch(err => res.status(400).json('Error: ' + err))
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