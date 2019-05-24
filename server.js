//jshint esversion:6

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');

//requires routes 
const homeRouter = require('./routes/home');
const userRouter = require('./routes/user');
const bookshelfRouter = require('./routes/bookshelf');

const app = express();

require('dotenv').config();

//connect to the mongoDB with mongoose 
require('./config/database');

//configure passport for our app 
require('./config/passport');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//session middleware for passport
app.use(session({
  secret: 'podcastsRock',
  resave: false, 
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/users', userRouter);
app.use('/bookshelf', bookshelfRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


