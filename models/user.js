//jshint esversion:6

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

// podcast bookshelf data 
const bookshelfSchema = new Schema({
    title: String,
    author: String,
    image: String,
    notes: String,
    read: Boolean,
});



//user data
const userSchema = new Schema({
    name: String,
    // podcasts: [podcastSchema],
    bookshelves: [bookshelfSchema],
    googleId: String
}, {
    timestamps: true
});




module.exports = mongoose.model('User', userSchema);