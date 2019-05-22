//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/projectTwoDB", {
    useNewUrlParser: true
});

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
