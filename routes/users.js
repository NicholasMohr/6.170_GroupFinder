var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Project = require('../models/projects');

router.get('/', function(req, res) {
  	res.render('index', { title: 'User Request'});
});

router.get('/:username', function(req, res) {
	if (req.user == null) {
		res.redirect('/');
	} else if (req.params.username != req.user.authentication.username) {
		res.redirect('/user/' + req.user.authentication.username)
	} else {
		User.findOne({'_id': req.user._id}).populate("projects.proj_id").exec({}, function (err, user) {
			res.json(user)
		});
	}
})

router.get('/:username/projects', function(req, res) {
	if (req.user == null) {
		res.redirect('/');
	} else if (req.params.username != req.user.authentication.username) {
		res.redirect('/user/' + req.user.authentication.username + '/projects')
	} else {
		User.findOne({'_id': req.user._id}).populate("projects.proj_id").exec({}, function (err, user) {
			res.json(user.projects)
		});
	}
});

/**
Users can update:
  password, name, email, phone, location, availability, skills,
  project.grade, project.interaction, project.dedication
**/
router.put('/', function (req,res) {	

});

module.exports = router;