var express = require('express');
var cookieparser = require('cookie-parser');
var router = express.Router();

var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'This is for the API'});
});

router.post('/login', passport.authenticate('local-login', {
	failureRedirect: '/',
	failureFlash: true 
}), function(req, res) { // if successful
    res.json(req.user);
});

router.post('/logout', function(req, res) {
    req.logout();
  	res.redirect('/');
});

router.post('/signup', passport.authenticate('local-signup', {
	failureRedirect : '/',
	failureFlash : true 
}), function (req,res) { // if successful
	res.json(req.user);
});

module.exports = router;