var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Project = require('../models/projects');

router.get('/', function(req, res) {
  	res.render('index', { title: 'User Request'});
});

router.get('/:username', function(req, res) {
	if (req.user == null) {
		//TODO: THROW HTTP ERROR instead
		res.redirect('/');
	} else if (req.params.username != req.user.authentication.username) {
		//TODO: THROW HTTP ERROR instead
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
  password, name, email, phone, location, availability, skills, timing
**/
router.post('/', function (req,res) {
	
	var password=req.user.authentication.password;
	console.log(password);
	if (req.body.password) {password=req.body.password;} 
	
	info = req.user.info;
	if (req.body.name) { info.name = req.body.name; }
	console.log(info.name);
	if (req.body.email) { info.email = req.body.email; }
	if (req.body.phone) { info.phone = req.body.phone; }
	if (req.body.location) { info.location = req.body.location; }
	if (req.body.availability) { info.availability = req.body.availability; }
	if (req.body.skills) { info.skills = req.body.skills; }
	if (req.body.timing) { info.timing = req.body.timing; }
	
	User.update({'_id': req.user._id}, {
		$set: { 'info': info , 'authentication.password': password}
	}, function (err) {
		//TODO: THROW HTTP ERROR
		// unable to update user information
	});
	
	res.json(req.user);
});

module.exports = router;