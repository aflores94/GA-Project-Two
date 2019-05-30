//jshint esversion:6

const mongoose = require('mongoose');

//podcast data
const podcastSchema = new mongoose.Schema({
    website: String,
    spotifyLink: String,
    appleMusicLink: String,
    // bookshelf: bookshelfSchema (make reference)
});


module.exports = mongoose.model('Podcast', podcastSchema);