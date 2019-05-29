//jshint esversion:6

const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/home');
const usersCtrl = require('../controllers/users');

//view homepage with podcast thumbnails and buttons to view profile bookshelf
router.get("/users", usersCtrl);

//  @ POST private 
router.post("/profile", function (req, res){ 
    //adds podcast to homepage 
     function isLoggedIn(req, res, next) {
         if (req.isAuthenticated()) return next();
         res.redirect('/auth/google');
     }
});

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