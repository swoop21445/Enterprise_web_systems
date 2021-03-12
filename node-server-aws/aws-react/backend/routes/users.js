const router = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/login').post((req,res) => {
    const user = req.body.username;
    const pass = req.body.password;
    User.findOne({username: user})
        .then(login_data => {if (login_data.password === pass){
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
    const song = "default"
    
    const new_user = new User({username, password, song});

    new_user.save()
        .then(() => res.json("user registered successfuly"))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route('/admin_check').post((req,res) => {
    const username = req.body.username
})

router.route('/update').post((req,res) => {
    const user = req.body.user;
    const song = req.body.song;
    console.log(user)
    console.log(typeof id)
    console.log(song)
    const query = {username: user}

    User.findOneAndUpdate(query, {song:song})
        .then(() => res.json("song updated"))
        .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router;