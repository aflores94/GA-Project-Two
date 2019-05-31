//jshint esversion:6 
const express = require('express');
const router = express.Router();
const podcastMgr = require('../utils/podcast');
const User = require('../models/user');

function showBookshelf(req, res){
    const collectionId = parseInt(req.params.id);
    User.find({
                'podcasts': {
                    $elemMatch: {
                        'collectionId': collectionId
                    }
                }
            }, {
                'podcasts': {
                    $elemMatch: {
                        'collectionId': collectionId
                    }
                }
            }, function (err, result) {
                res.render('user-bookshelf', {
                    user: req.user,
                    podcast: result[0].podcasts[0]
                }); 
    });
}

function createBookshelf(req, res) {
   User.findByIdAndUpdate(req.user._id, {$push: {bookshelves: req.body}}, {new: true}, function(err, user) { 
    res.redirect(`/users/podcast/bookshelf/${req.params.id}`);
   });
}

function updateBook(req, res){
    User.findById(req.user._id, function(err, user) {
        let bookshelf = user.bookshelves.id(req.params.bookshelfid);
        bookshelf.set(req.body);
        user.save(function(err, updatedUser) {
            console.log(updatedUser)
            res.redirect(`/users/podcast/bookshelf/${req.params.podcastid}`);
        });
    });
}

function deleteBook(req, res) {
    User.findByIdAndUpdate(req.user._id, {$pull: {bookshelves: {_id: req.params.bookshelfid}}}, function (err, user) {
        console.log(err)
        res.redirect(`/users/podcast/bookshelf/${req.params.podcastid}`);
    });
}

module.exports = {
    showBookshelf,
    createBookshelf,
    updateBook,
    deleteBook
};