//jshint esversion:6

const express = require('express');
const router = express.Router();
const bookshelvesCtrl = require('../controllers/bookshelves');

// router.get("/users/bookshelf/:bookshelfId", bookshelvesCtrl.);

router.post("/users/bookshelf/:bookshelfId", bookshelvesCtrl);


router.delete("/users/:userId/podcast-bookshelf/:bookshelfId", function (req, res) {
    //remove book from bookshelf 
    //  function isLoggedIn(req, res, next) {
    //      if (req.isAuthenticated()) return next();
    //      res.redirect('/auth/google');
    //  }
});


module.exports = router;