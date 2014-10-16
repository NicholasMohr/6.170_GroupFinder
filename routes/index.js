var express = require('express');
var cookieparser = require('cookie-parser');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'This is for the API'});
	
});



module.exports = router;