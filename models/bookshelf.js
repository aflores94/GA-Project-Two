//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/projectTwoDB", {
    useNewUrlParser: true
});


//podcast bookshelf data 
const bookshelfSchema = new mongoose.Schema({
    book: {
        title: String,
        author: String,
        image: String,
        notes: String,
        read: Boolean,
    }
});

const Bookshelf = mongoose.model('bookshelf', bookshelfSchema);

module.exports = bookshelfSchema;