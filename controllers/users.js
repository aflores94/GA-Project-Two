//jshint esversion:6

const User = require('../models/user');

function home(req, res, next) {
    console.log(req.user)
    res.render('user', {
        user: req.user,
    });
}

 

module.exports = home;