var express = require('express');
var cookieparser = require('cookie-parser');
var router = express.Router();
var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'This is for the API'});
	
});

router.get('/login', function(req, res) {
    res.render('login', { title: 'Login'});
	
});

router.post('/login',passport.authenticate('local-login', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: true 
}));

router.post('/logout', function(req, res) {
    //TODO: logout user
});

router.post('/signup', passport.authenticate('local-signup', {
	successRedirect : '/',
	failureRedirect : '/signup',
	failureFlash : true 
}));

module.exports = router;