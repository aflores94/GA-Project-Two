//jshint esversion:6

const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/home');
const usersCtrl = require('../controllers/users');
const request = require('request');
const url = 'https://itunes.apple.com/search?term=';
const podcastMgr = require('../utils/podcast');

//view homepage with podcast thumbnails and buttons to view profile bookshelf
router.get("/users", usersCtrl.home);

router.post("/users", function(req, res, next) {
    const searchTerm = req.body.search.split("").join("+");
    request(url + searchTerm + '&entity=podcast', function(err, response, body) {
    podcastMgr.results = JSON.parse(body).results;
        res.render('user', {
            user: req.user,
            data: podcastMgr.results
        });
    });
});




// router.post("/profile", function (req, res){ 
//     //adds podcast to homepage 

// });

router.delete("/profile", function (req, res) {
    //delete podcast from homepage (also deletes any related bookshelves)
     function isLoggedIn(req, res, next) {
         if (req.isAuthenticated()) return next();
         res.redirect('/auth/google');
     }
});

//user profile page 
router.get("/profile/settings", function (req, res) {
    //view user profile
     function isLoggedIn(req, res, next) {
         if (req.isAuthenticated()) return next();
         res.redirect('/auth/google');
     }
});


//  router.post('/putformactionhere', isLoggedIn, homeCtrl.'putfunctionhere');

router.delete("/users/profile", function (req, res) {
    //delete account
});

module.exports = router;