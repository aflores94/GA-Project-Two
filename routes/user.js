//jshint esversion:6

const express = require('express');
const router = express.Router();


//user home page
app.get("/:userId", function (req, res) {
    //view homepage with podcast thumbnails and buttons to view profile bookshelf
    res.render('user');
});

app.delete("/:userId", function (req, res) {
    //delete podcast from homepage (also deletes any related bookshelves)
});

//user profile page 
app.get("/:userId/profile", function (req, res) {
    //view user profile
    res.render('');
});

app.post("/:userId/profile", function (req, res) {
    //update password, username, etc. 
});

app.delete("/:userId/profile", function (req, res) {
    //delete account
});

module.exports = router;