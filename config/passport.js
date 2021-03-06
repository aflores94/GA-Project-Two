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
        // a user has logged in via OAuth!
        User.findOne({
            'googleId': profile.id
        }, function (err, user) {
            if (err) return cb(err);
            if (!user) {
                var newUser = new User({
                    name: profile._json.given_name,
                    email: profile.emails[0].value,
                    avatar: profile.photos[0].value,
                    googleId: profile.id
                });
                newUser.save(function (err) {
                    if (err) return cb(err);
                    return cb(null, newUser);
                });
      
                } else {
                    return cb(null, user);
                }
        });
    }
));

 passport.serializeUser(function (user, done) {
     done(null, user.id);
 });

 passport.deserializeUser(function (id, done) {
     User.findById(id, function (err, user) {
         done(err, user);
     });
 });