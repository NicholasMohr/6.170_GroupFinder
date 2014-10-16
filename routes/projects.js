var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  
  	res.render('index', { title: 'Project Request'});
});




module.exports = router;