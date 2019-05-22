//jshint esversion:6

const express = require('express');
const router = express.Router();

//log in page 
router.get("/login", function (req, res) {
    //log in page
    res.render('login');
});

router.post("/login", function (req, res) {
    //create log in information 
});


module.exports = router;