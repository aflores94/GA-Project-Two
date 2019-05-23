//jshint esversion:6

const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/home');

//user home page
router.get("user/:userId", function (req, res) {
    //view homepage with podcast thumbnails and buttons to view profile bookshelf
    res.render('user');
});

router.delete("user/:userId", function (req, res) {
    //delete podcast from homepage (also deletes any related bookshelves)
});

//user profile page 
router.get("user/:userId/profile", function (req, res) {
    //view user profile
    res.render('');
});

router.post("user/:userId/profile", function (req, res) {
    //update password, username, etc. 
});

router.delete("user/:userId/profile", function (req, res) {
    //delete account
});

module.exports = router;