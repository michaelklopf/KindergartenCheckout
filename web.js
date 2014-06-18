// web.js

// set up
var express     = require('express');
var http        = require('http');
var stylus      = require('stylus');
var mongoose    = require('mongoose');
var passport    = require('passport');
var flash       = require('connect-flash');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var methodOverride = require('method-override');
var session     = require('express-session');
var env         = require('node-env-file');

// load env vars
env(__dirname + '/.env');

// load config and create database
var database    = require('./config/database');
mongoose.connect(database.url);

require('./config/passport.js')(passport);

// create and configure express app
var app = express();

console.log(process.env.PORT);

app.use(cookieParser(process.env.SECRETAUTH));
app.use(bodyParser());
app.use(session({key: process.env.SESSIONKEY, cookie: {maxAge: 60000 }}));
app.use(methodOverride());

app.use(stylus.middleware(__dirname + '/static'));

app.use("/css" , express.static(__dirname + '/static/css'));
app.use("/js" , express.static(__dirname + '/static/js'));
app.use("/fonts", express.static(__dirname + '/static/fonts'));

app.set('views', __dirname + '/app/views');
app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 80);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// load routes
require('./app/routes.js')(app, passport);

// For seeing changes without stoping, starting the server, install nodemon globally npm install -g nodemon. Start your server with nodemon server.js
http.createServer(app).listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});
