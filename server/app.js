let createError = require('http-errors');
let express = require('express');
let path = require('path');
require('dotenv');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let port=process.env.PROT || 5000;

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
