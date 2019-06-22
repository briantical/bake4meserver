//This is the entry to the server
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

const api = require('./src/routes/index');
const { mongoManager } = require('./src/mongo');
const { passport } = require('./src/passport');
const { onAppStart } = require('./on-start');

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');

var app = express();
mongoManager.connect();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(bodyParser.json({
  limit: config.bodyLimit,
}));

// Authorization
app.use(passport.init());

// api routes v1
app.use('/api/criteria', api(config));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
