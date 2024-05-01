var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const core = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ecommercewebRouter = require('./routes/ecommerceweb');
var categories = require('./routes/categories');
var items = require('./routes/items');
var orders = require('./routes/order');
require('dotenv').config()

var app = express();
const mongoose= require('mongoose');
app.use(core());
// view engine setup

const io = require('socket.io')(); //<------
require('./sockets')(io)   


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/web', ecommercewebRouter);
app.use('/categories', categories);
app.use('/items', items);
app.use('/orders', orders);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.use(core());
app.use(express.static('public'));



//*********************************************Connect to Db**************************************************************
var uri = process.env.DB_URL;
console.log(uri,"this is uri")
mongoose.connect(uri, {useNewUrlParser: true});
const mydb = mongoose.connection;
mydb.on('error', error => console.log(error));
mydb.once('open', () => {
    console.log("Db connected");
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

module.exports = { app, io };
