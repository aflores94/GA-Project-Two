//jshint esversion:6 

const User = require('../models/user');

function home(req, res, next) {
    res.render('home', {
        user: req.user,
     });
}

module.exports = home;