//jshint esversion:6

const mongoose = require('mongoose');

//user data
const userSchema = new mongoose.Schema({
    name: String,
    // podcasts: [podcastSchema],
    // bookshelves: [bookshelfSchema],
    googleId: String
}, {
    timestamps: true
});

//podcast bookshelf data 
const bookshelfSchema = new mongoose.Schema({
    title: String,
    author: String,
    image: String,
    notes: String,
    read: Boolean,

});


// let user1 = new user({
//     username: "Andrea",
//     podcasts: [podSaveAmerica, podSaveWorld],
//     bookshelves: ["Pod Save the World"]
// });

module.exports = mongoose.model('User', userSchema), mongoose.model('Bookshelf', bookshelfSchema);