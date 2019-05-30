//jshint esversion:6

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// podcast bookshelf data 
const bookshelfSchema = new Schema({
    title: String,
    author: String,
    notes: String,
    read: String,
});

//user data
const userSchema = new Schema({
    name: String,
    podcasts: [],
    bookshelves: [bookshelfSchema],
    googleId: String,
    avatar: String
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);