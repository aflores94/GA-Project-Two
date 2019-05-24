//jshint esversion:6

const mongoose = require('mongoose');

//podcast data
const podcastSchema = new mongoose.Schema({
    website: String,
    spotifyLink: String,
    appleMusicLink: String,
    // bookshelf: bookshelfSchema (make reference)
});

// let podSaveWorld = new podcast({
//     website: String,
//     spotifyLink: String,
//     appleMusicLink: String,
//     bookshelf: bookshelfSchema
// });

// let podSaveAmerica = new podcast({
//     website: String,
//     spotifyLink: String,
//     appleMusicLink: String,
//     bookshelf: bookshelfSchema
// });

module.exports = mongoose.model('Podcast', podcastSchema);