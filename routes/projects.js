var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  	//TODO: RETURN LIST OF PROJECTS
  	res.render('index', { title: 'Project Request'});
});

router.post('/', function(req, res) {
  	//TODO: Add a new project
}); 

router.get('/:project_name/users', function(req, res) {
  	//TODO: RETURN LIST OF users for specific project
});

router.get('/:project_name/users/filter', function(req, res) {
  	//TODO: return sorted list of users based on filter weights
});


router.post('/:project_name/users', function(req, res) {
  	//TODO: Add a user to the project
});

router.delete('/:project_name/users', function(req, res) {
  	//TODO: delete the logged in user from the project
});

router.delete('/:project_name', function(req, res) {
  	//TODO: delete a project
});
module.exports = router;