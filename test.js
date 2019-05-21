//jshint esversion:6
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/projectTwoDB", { useNewUrlParser: true });

//user data
const userSchema = new mongoose.Schema({
        username: String,
        podcasts: [podcastSchema],
        bookshelves: []
});

const User = mongoose.model('user', userSchema);

let user1 = new user({
    username: "Andrea",
    podcasts: [podSaveAmerica, podSaveWorld],
    bookshelves: ["Pod Save the World"]
});

//podcast data
const podcastSchema = new mongoose.Schema({
        website: url(),
        spotifyLink: url(),
        appleMusicLink: url(),
        bookshelf: bookshelfSchema
});

const Podcast = mongoose.model('podcast', podcastSchema);

let podSaveWorld = new podcast({
    website: url(),
    spotifyLink: url(),
    appleMusicLink: url(),
    bookshelf: bookshelfSchema
});

let podSaveAmerica = new podcast({
    website: url(),
    spotifyLink: url(),
    appleMusicLink: url(),
    bookshelf: bookshelfSchema
});

//podcast bookshelf data 
const bookshelfSchema = new mongoose.Schema({
    book: {
        title: String, 
        author: String,
        image: url(),
        notes: String,
        read: Boolean,
    }
});

const Bookshelf = mongoose.model('bookshelf', bookshelfSchema);