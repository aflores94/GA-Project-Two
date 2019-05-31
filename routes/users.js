//jshint esversion:6
const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/home');
const usersCtrl = require('../controllers/users');
const bookshelvesCtrl = require('../controllers/bookshelves');
const request = require('request');
const url = 'https://itunes.apple.com/search?term=';
const podcastMgr = require('../utils/podcast');

//view homepage with podcast thumbnails and buttons to view profile bookshelf
router.get("/users", usersCtrl.home);
router.get('/users/search', usersCtrl.showSearch);
router.post('/users/search', usersCtrl.search);
router.post('/users/podcasts/:idx', usersCtrl.addNewPodcast);
router.delete('/users/podcasts/:podcastid', usersCtrl.deletePodcast);


module.exports = router;