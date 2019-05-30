//jshint esversion:6
const express = require('express');
const router = express.Router(); 
const request = require('request');
const url = 'https://itunes.apple.com/search?term=';
const podcastMgr = require('../utils/podcast');
const User = require('../models/user');

function home(req, res, next) {
    res.render('user-home', {
        user: req.user,
        data: null
    });
}

function showSearch(req, res) {
    res.render('user-search', {
        user: req.user,
        data: null,
    });
}

function search(req, res) {
    const searchTerm = req.body.searchTerm.split(" ").join("+");
    request(url + searchTerm + '&media=podcast' + '&entity=podcast' + '&attribute=titleTerm' + '&limit=10', (err, response, body) => {
        JSON.parse(body).results.forEach(obj => podcastMgr.results.push(obj));
        res.render('user-search', {
            user: req.user,
            data: podcastMgr.results
        });
    });
}

function addNewPodcast(req, res) {
    const index = parseInt(req.params.idx);
    const selectedPodcast = podcastMgr.getPodcast(index);
    User.findByIdAndUpdate(req.user._id, {
        $push: {
            podcasts: selectedPodcast
        }
    }, {
        new: true
    }, function (err, response) {
        console.log(response);
        res.redirect('/users');
    });

}

function deletePodcast(req, res) {
    User.findByIdAndRemove(req.params.id, (err, todo) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Podcast successfully deleted",
            id: podcast._id
        };
        return res.status(200).send(response);
    });
}


module.exports = {
    home, 
    search,
    addNewPodcast,
    showSearch
};