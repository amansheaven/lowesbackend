var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
const graphQl = require('./schema/index');
var cors = require('cors');

var indexRouter = require('./routes');

var app = express();
var favicon = require('serve-favicon')

// view engine setup

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(favicon(path.join(__dirname,'favicon.ico')));
app.use(bodyParser.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/graphql', (req,res) => {
  return graphQl(req,res);
})


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
});


module.exports = app;
