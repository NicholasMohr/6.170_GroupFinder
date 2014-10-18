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

router.get('/user/:username', function(req, res) {
	if (req.user == null) {
		res.redirect('/');
	} else if (req.params.username != req.user.authentication.username) {
		res.redirect('/user/' + req.user.authentication.username)
	} else {
		res.json(req.user);
	}
})

router.get('/user/:username/projects', function(req, res) {
	if (req.user == null) {
		res.redirect('/');
	} else if (req.params.username != req.user.authentication.username) {
		res.redirect('/user/' + req.user.authentication.username + '/projects')
	} else {
		res.json(req.user.projects);
	}
})

router.post('/login', passport.authenticate('local-login', {
	failureRedirect: '/login',
	failureFlash: true 
}), function(req, res) { // if successful
    res.redirect('/user/' + req.user.authentication.username);
});

router.get('/logout', function(req, res) {
    req.logout();
  	res.redirect('/');
});

router.get('/signup', function(req, res) {
    res.render('signup', { title: 'Login'});
	
});

router.post('/signup', passport.authenticate('local-signup', {
	failureRedirect : '/signup',
	failureFlash : true 
}), function (req,res) {
	res.redirect('/user/' + req.user.authentication.username);
});

module.exports = router;