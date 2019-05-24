//jshint esversion:6

const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/home');

//user home page
router.get("/users", function (req, res) {
    //view homepage with podcast thumbnails and buttons to view profile bookshelf
    res.render('user');
     function isLoggedIn(req, res, next) {
         if (req.isAuthenticated()) return next();
         res.redirect('/auth/google');
     }
});

router.post("/users/:id", function (req, res){ 
    //adds podcast to homepage 
     function isLoggedIn(req, res, next) {
         if (req.isAuthenticated()) return next();
         res.redirect('/auth/google');
     }
});

router.delete("/users/:id", function (req, res) {
    //delete podcast from homepage (also deletes any related bookshelves)
     function isLoggedIn(req, res, next) {
         if (req.isAuthenticated()) return next();
         res.redirect('/auth/google');
     }
});

//user profile page 
router.get("/users/:id/profile", function (req, res) {
    //view user profile
     function isLoggedIn(req, res, next) {
         if (req.isAuthenticated()) return next();
         res.redirect('/auth/google');
     }
});


//  router.post('/putformactionhere', isLoggedIn, homeCtrl.'putfunctionhere');

router.delete("/users/:id/profile", function (req, res) {
    //delete account
});

module.exports = router;