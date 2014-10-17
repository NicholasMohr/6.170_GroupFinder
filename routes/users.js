var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  
  	res.render('index', { title: 'User Request'});
});

router.get('/', function(req, res) {

  	res.render('index', { title: 'User Request'});
});

router.get('/:username', function(req, res) {
  	// TODO: return user with specified username
	//req.param('user_id')
});

router.get('/:username/projects', function(req, res) {
  	// TODO: get list of projects the user is a part of
  
});

router.put('/', function(req, res) {
  	// TODO: updates information of logged in user
});


module.exports = router;