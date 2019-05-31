//jshint esversion:6
const express = require('express');
const router = express.Router();
const passport = require('passport');
const bookshelvesCtrl = require('../controllers/bookshelves');

router.get("/users/podcast/bookshelf/:id", bookshelvesCtrl.showBookshelf);

router.post("/users/podcast/bookshelf/:id", bookshelvesCtrl.createBookshelf);

router.put("/users/podcast/:podcastid/bookshelf/:bookshelfid", bookshelvesCtrl.updateBook);

router.delete("/users/podcast/:podcastid/bookshelf/:bookshelfid", bookshelvesCtrl.deleteBook);


module.exports = router;