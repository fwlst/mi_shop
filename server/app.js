var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

//  加载路由
var index = require('./routes/index');
var users = require('./routes/users');
var goods = require('./routes/goods');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//设置视图模板为html
//app.engine('.html', ejs.__express);
//app.set('view engine', 'html');

app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 使用 session 中间件
app.use(session({
  secret: 'secret', // 对session id 相关的cookie 进行签名
  resave: true,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie: {
    maxAge: 1000 * 60 * 30, // 设置 session 的有效时间，单位毫秒
  },
}));

app.use(function (req, res, next) {
  if(req.session.userName){
    next();
  }else {
    if(req.originalUrl === '/users/login' || req.originalUrl === '/users/logout' || req.originalUrl === '/users/register' || req.originalUrl === '/goods/goodsList'){
      next();
    }else {
      res.json({
        code: 604,
        data: '',
        msg: '您还没有登录'
      })
    }
  }

});


app.use('/', index);
app.use('/goods', goods);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
