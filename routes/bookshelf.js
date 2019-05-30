//jshint esversion:6
const express = require('express');
const router = express.Router();
const passport = require('passport');
const bookshelvesCtrl = require('../controllers/bookshelves');

router.get("/users/podcast/bookshelf/:id", bookshelvesCtrl.showBookshelf);

router.post("/users/podcast/bookshelf/add", bookshelvesCtrl.createBookshelf);

router.put("/users/podcast/bookshelf/:id", bookshelvesCtrl.updateBookshelf);

router.delete("/users/podcast/bookshelf/:id", bookshelvesCtrl.deleteBookshelf);


module.exports = router;