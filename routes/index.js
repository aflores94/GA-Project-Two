//jshint esversion:6

const express = require('express');
const router = express.Router();

const app = express();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.listen(5000, function(){
  console.log("Listening on port 5000");
}); 

module.exports = router;
