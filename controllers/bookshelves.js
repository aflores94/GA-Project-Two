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

function updateBookshelf(req, res){
    // User.findByIdAndUpdate(req.params.Bookshelf
    // { new: true },

    // (err, todo) => {
    //     if (err) return res.status(500).send(err);
    //     return res.send(todo);
    // }
}

function deleteBookshelf(req, res) {
    User.findByIdAndUpdate(req.user._id, {$pull: {bookshelves: req.body}}, function (err, user) {
        res.redirect(`/users/podcast/bookshelf/${req.params.id}`);
    });
}

module.exports = {
    showBookshelf,
    createBookshelf,
    updateBookshelf,
    deleteBookshelf
};