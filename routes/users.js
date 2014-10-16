var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  
  	res.render('index', { title: 'User Request'});
});

module.exports = router;