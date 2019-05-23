//jshint esversion:6 

const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    function (accessToken, refreshToken, profile, cb) {
        // a user has logged in with OAuth...
        User.findOne({googleId: profile.id}, function(err, user) {
            if (err) return cb(err);
            if (user) {
                // returning user
                cb(null, student);
            } else {
                // new user
                const newUser = new User({
                    name: profile.displayName, 
                    email: profile.emails[0].value,
                    googleId: profile.id
                }); 
                newUser.save(function(err) {
                    if (err) return cb(err);
                    cb(null, newUser);
                });
            }
        });
    }
));

 passport.serializeUser(function (student, done) {
     done(null, student.id);
 });

 passport.deserializeUser(function (id, done) {
     Student.findById(id, function (err, student) {
         done(err, student);
     });
 });