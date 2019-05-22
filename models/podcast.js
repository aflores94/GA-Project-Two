//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/projectTwoDB", {
    useNewUrlParser: true
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
