var express = require('express');
var cookieparser = require('cookie-parser');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'This is for the API'});
	
});

router.post('/login', function(req, res) {
    //TODO: login user
});

router.post('/logout', function(req, res) {
    //TODO: logout user
});

router.post('/signup', function(req, res) {
    //TODO: sign in and create new user
});


module.exports = router;