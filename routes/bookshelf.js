//jshint esversion:6

const express = require('express');
const router = express.Router();
const bookshelvesCtrl = require('../controllers/bookshelves');

//podcast & bookshelf page 
//podcast info on the left, bookshelf on the right 

router.get("/user/:userId/podcast-bookshelfs/:bookshelfId", function (req, res) {
    //go to podcast bookshelf
    res.render('bookshelf');
});

router.post("/user/:userId/podcast-bookshelf/:bookshelfId", function (req, res) {
    //add book to bookshelf or update existing book
});

router.delete("/user/:userId/podcast-bookshelf/:bookshelfId", function (req, res) {
    //remove book from bookshelf 
});

module.exports = router;