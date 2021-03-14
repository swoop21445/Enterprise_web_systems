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
    const song = "default";
    const admin = false;
    
    const new_user = new User({username, password, song, admin});

    new_user.save()
        .then(() => res.json("user registered successfuly"))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route('/admin_check').post((req,res) => {
    const username = req.body.username
    User.findOne({username: username})
        .then(admin_check => {if (admin_check.admin){
            res.json({admin:true})
        } else {
            res.json({admin:false})
        }})
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update').post((req,res) => {
    const user = req.body.user;
    const song = req.body.song;
    const query = {username: user}

    User.findOneAndUpdate(query, {song:song})
        .then(() => res.json("song updated"))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/octane').get((req,res) => {
    User.countDocuments({song:"High Octane"})
        .then(high_octane => res.json({octane:high_octane}))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route('/all_that').get((req,res) => {
    User.countDocuments({song:"All That"})
        .then(All_that => res.json({all_that: All_that}))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route('/default').get((req,res) => {
    User.countDocuments({song:"default"})
        .then(count => res.json({default: count}))
        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;