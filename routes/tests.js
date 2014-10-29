var express = require('express');
var cookieparser = require('cookie-parser');
var router = express.Router();

/**
Renders test page.
Written by Danielle
**/
router.get('/', function(req, res) {
    res.render('tests', { title: 'Testing API'});
});

module.exports = router;
