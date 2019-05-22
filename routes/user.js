//jshint esversion:6

const express = require('express');
const router = express.Router();

//user home page
router.get("/:userId", function (req, res) {
    //view homepage with podcast thumbnails and buttons to view profile bookshelf
    res.render('user');
});

router.delete("/:userId", function (req, res) {
    //delete podcast from homepage (also deletes any related bookshelves)
});

//user profile page 
router.get("/:userId/profile", function (req, res) {
    //view user profile
    res.render('');
});

router.post("/:userId/profile", function (req, res) {
    //update password, username, etc. 
});

router.delete("/:userId/profile", function (req, res) {
    //delete account
});

module.exports = router;