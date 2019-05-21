//jshint esversion:6

const express = require('express');
const router = express.Router();

//log in page 
app.get("/login", function (req, res) {
    //log in page
    res.render('login');
});

app.post("/login", function (req, res) {
    //create log in information 
});


module.exports = router;