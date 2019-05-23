//jshint esversion:6

const express = require('express');
const router = express.Router();
const passport = require('passport');
const homeCtrl = require('../controllers/home');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

 // Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google', {
    scope: ['profile', 'email']
  }
));

 // Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google', {
    successRedirect: '/students',
    failureRedirect: '/students'
  }
));

 // OAuth logout route
 router.get('/logout', function (req, res) {
   req.logout();
   res.redirect('/students');
 });

 module.exports = router;