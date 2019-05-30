//jshint esversion:6 
const express = require('express');
const router = express.Router();
const podcastMgr = require('../utils/podcast');
const User = require('../models/user');


function createBookshelf(req, res) {
    const newBookshelf = new Bookshelf(req.body);
    newBookshelf.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newBookshelf);
    });
    res.render('bookshelf');
}

module.exports = createBookshelf;
