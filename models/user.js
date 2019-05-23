//jshint esversion:6

const mongoose = require('mongoose');
const podcastSchema = require('./podcast');
const bookshelfSchema = require('./bookshelf');

mongoose.connect("mongodb://localhost:27017/projectTwoDB", {
    useNewUrlParser: true
});

//user data
const userSchema = new mongoose.Schema({
    name: String,
    podcasts: [podcastSchema],
    bookshelves: [bookshelfSchema],
    googleId: String
}, {
    timestamps: true
});

const User = mongoose.model('user', userSchema);

// let user1 = new user({
//     username: "Andrea",
//     podcasts: [podSaveAmerica, podSaveWorld],
//     bookshelves: ["Pod Save the World"]
// });
