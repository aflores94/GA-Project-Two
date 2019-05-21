//jshint esversion:6

const express = require('express');
const router = express.Router();

//podcast & bookshelf page 
//podcast info on the left, bookshelf on the right 

app.get("/user/:userId/podcast-bookshelfs/:bookshelfId", function (req, res) {
    //go to podcast bookshelf
    res.render('bookshelf');
});

app.post("/user/:userId/podcast-bookshelf/:bookshelfId", function (req, res) {
    //add book to bookshelf or update existing book
});

app.delete("/user/:userId/podcast-bookshelf/:bookshelfId", function (req, res) {
    //remove book from bookshelf 
});

module.exports = router;