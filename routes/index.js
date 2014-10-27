var express = require('express');
var cookieparser = require('cookie-parser');
var router = express.Router();
var utils = require('../utils/utils');

var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

/**
Renders home page.
**/
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {});
});

module.exports = router;
/**
Logs in user based on username/password they submit.
**/
router.post('/login', passport.authenticate('local-login', 
	{ failureFlash: 'Invalid username or password.' }
), function(req, res) { // if successful
    res.json(req.user);
});

/**
Logs out user.
**/
router.post('/logout', function(req, res) {
	req.logout();
    res.json('yay');
	console.log("successful logout");
   });

/**
Signs up user based on the username/password they submit.
**/
router.post('/signup', passport.authenticate('local-signup', 	{ failureFlash: 'That already exists.' }), function (req,res) {
	// if successful
	res.json(req.user);
});

module.exports = router;