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
    const newBookshelf = new Bookshelf(req.body);
    newBookshelf.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newBookshelf);
    });
    res.render('user-bookshelf');
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
// User.findByIdAndRemove(req.params.bookshelf, (err, user) => {
//     if (err) return res.status(500).send(err);
//     const response = {
//         message: "Bookshelf deleted",
//         id: bookshelf._id
//     };
//     return res.status(200).send(response);
// });
}

module.exports = {
    showBookshelf,
    createBookshelf,
    updateBookshelf,
    deleteBookshelf
};