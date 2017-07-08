/**
* Module dependencies.
*/
 
var express = require('express')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var cors = require('cors');
var app = express();
var bodyParser=require("body-parser");
var jwt = require('jsonwebtoken');
var mysql    = require('mysql');
require('dotenv').config();
 
/**
* creating mysql connection.
*/
 
var connection = mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database : process.env.DB_NAME
});
 
connection.connect(function(err){
                if(err)
                console.log(err);
});
 
global.db = connection;
 
/**
* all environments.
*/
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.use(function(req, res, next) {
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                next();
});
 
/**
* routes.
*/
 
app.post('/signup', user.signup);
app.post('/signin', user.signin);
app.post('/check_user',user.check_user);
 
/**
* creating server.
*/
 
http.createServer(app).listen(app.get('port'), function(){
                console.log('Express server listening on port ' + app.get('port'));
});
