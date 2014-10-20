var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Project = require('../models/projects');
var utils = require('../utils/utils');

router.get('/', function(req, res) {
  	res.render('index', { title: 'User Request'});
});

router.get('/:username', function(req, res) {
	if (req.user == null) {
		//TODO: FIX SO authorization info isn't returned
		res.redirect('/');
	} else if (req.params.username != req.user.authentication.username) {
		res.redirect('/user/' + req.user.authentication.username)
	} else {
		User.findOne({'_id': req.user._id}).populate("projects.proj_id").exec({}, function (err, user) {
			if(err){
				utils.sendErrResponse(res, 500, 'An unexpected error occured.');
			}
			else{
				res.json(user);
			}
			
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
			if(err){
			utils.sendErrResponse(res, 500, 'An unexpected error occured.');
			}
			else{
				res.json(user.projects);
			}
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
			utils.sendErrResponse(res, 500, 'An unexpected error occured. Could not update information');
	});
	
	res.json(req.user);
});

router.delete('/', function(req, res) {
  	if(req.user){
  		User.remove({_id:req.user._id},function(e,docs){
			if(e){
				 utils.sendErrResponse(res, 500, 'An unexpected error occurred. We could not add the user to the project.');
			}
			else{
				utils.sendErrResponse(res, 200, 'Sucessfully removed user');
			}
  		});
  	}
  	else{
		utils.sendErrResponse(res, 401, 'You must first login as a user');
  	}
});

module.exports = router;