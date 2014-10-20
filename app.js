// node package dependencies
var express = require('express');
var session = require('express-session')
var path = require('path');
var mongo = require('mongodb');
var logger = require('morgan');
var favicon = require('static-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport')
var flash = require('connect-flash');

var mongo = require('mongodb');
var mongoose = require('mongoose');

var connection_string = 'localhost/groupfinder';

// openshift dependencies
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@' +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/project3';
}

// instantiate db
mongoose.connect('mongodb://' + connection_string);

// pass passport for configuration
require('./config/passport')(passport);

// instantiate routes
var routes = require('./routes/index');
var projs = require('./routes/projects');
var users = require('./routes/users');

/**
----- MIDDLEWARE -----
**/

var app = express();
app.listen(8080);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat' }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// make db accessible to router/requests
app.use(function(req,res,next){
    next();
});

var port= process.env.OPENSHIFT_NODEJS_PORT;
var ip= process.env.OPENSHIFT_NODEJS_IP;

app.listen(port || 3000, ip)

app.use('/users', users);
app.use('/projects', projs);
app.use('/', routes);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/**
----- ERROR HANDLERS -----
**/

// development error handler: will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler: no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;