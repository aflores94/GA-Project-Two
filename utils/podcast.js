//jshint esversion:6 
let results = [];

function getPodcast(index) {
    return results.splice(index, 1)[0];
}

module.exports = {
    getPodcast,
    results
};