var express = require('express');
var cookieparser = require('cookie-parser');
var router = express.Router();
var utils = require('../utils/utils');
var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

/**
Renders home page.
Written by Danielle
**/
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {});
});

module.exports = router;
/**
Logs in user based on username/password they submit.
Written by Danielle
**/
router.post('/login', passport.authenticate('local-login', 
	{ failureFlash: 'Invalid username or password.' ,successFlash: 'Welcome!' }
), function(req, res) { 
    res.json(req.user);
});

/**
Logs out user.
Written by Danielle
**/
router.post('/logout', function(req, res) {
	req.logout();
	res.json('Logged out');
   });

/**
Signs up user based on the username/password they submit.
Written by Danielle
**/
router.post('/signup', passport.authenticate('local-signup', 	{ successFlash: 'Welcome!' ,failureFlash: 'That already exists.' }), function (req,res) {
	res.json(req.user);
});

module.exports = router;