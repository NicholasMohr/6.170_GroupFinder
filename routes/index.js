var express = require('express');
var cookieparser = require('cookie-parser');
var router = express.Router();
var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'This is for the API'});
	
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
		var projects = req.Project;
		var users = req.User;
		users.findOne({'_id': req.user._id}).populate("projects").exec({}, function (err, user) {
			res.json(user.projects)
		});
	}
})

router.get('/login', passport.authenticate('local-login', {
	failureRedirect: '/',
	failureFlash: true 
}), function(req, res) { // if successful
    res.redirect('/user/' + req.user.authentication.username);
});

router.get('/logout', function(req, res) {
    req.logout();
  	res.redirect('/');
});

router.get('/signup', passport.authenticate('local-signup', {
	failureRedirect : '/',
	failureFlash : true 
}), function (req,res) {
	res.redirect('/user/' + req.user.authentication.username);
});

module.exports = router;