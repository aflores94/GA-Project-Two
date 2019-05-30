//jshint esversion:6

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const podcast = require('./podcast');

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
    podcasts: [],
    bookshelves: [bookshelfSchema],
    googleId: String,
    avatar: String
}, {
    timestamps: true
});




module.exports = mongoose.model('User', userSchema);