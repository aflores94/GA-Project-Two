//jshint esversion:6
const express = require('express');
const router = express.Router(); 


const User = require('../models/user');

function home(req, res, next) {
    console.log(req.user);
    res.render('user', {
        user: req.user,
        data: null
    });
}

function searchPodcasts() {

}

module.exports = { 
    searchPodcasts, 
    home
};