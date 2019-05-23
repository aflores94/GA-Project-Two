//jshint esversion:6

const mongoose = require('mongoose');
const bookshelfSchema = require('./bookshelf');

mongoose.connect("mongodb://localhost:27017/projectTwoDB", {
    useNewUrlParser: true
}); 

//podcast data
const podcastSchema = new mongoose.Schema({
    website: String,
    spotifyLink: String,
    appleMusicLink: String,
    bookshelf: bookshelfSchema
});

const Podcast = mongoose.model('podcast', podcastSchema);

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

module.exports = podcastSchema;