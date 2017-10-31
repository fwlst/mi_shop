var express = require('express');
var router = express.Router();

var User = require('./../models/users');

/*
* 注册接口
* */
router.post('/register', (req, res, next) => {
  let param = {
    userName: req.body.username,
    userPwd: req.body.password
  };

  if (param.userName == '') {
    res.json({
      code: 600,
      msg: '用户名不能为空'
    })
  } else if (param.userPwd == '') {
    res.json({
      code: 600,
      msg: '密码不能为空'
    })
  } else {
    User.findOne({userName: param.userName}, (err, doc) => {
      if (err) {
        res.json({
          code: 600,
          msg: err.message
        })
      } else {
        if (doc) {
          res.json({
            code: 600,
            msg: '用户已存在'
          });
        } else {
          User.create(param, (createErr, createDoc) => {
            if (createErr) {
              res.json({
                code: 600,
                msg: err.message
              })
            } else {
              res.json({
                code: 200,
                data: {
                  session: createDoc,
                },
                msg: '注册成功'
              });
            }
          })
        }
      }
    });
  }
});


router.post('/login', (req, res, next) => {
  let param = {
    userName: req.body.username,
    userPwd: req.body.password
  };
  if (param.userName == '') {
    res.json({
      code: 600,
      msg: '用户名不能为空'
    })
  } else if (param.userPwd == '') {
    res.json({
      code: 600,
      msg: '密码不能为空'
    })
  } else {
    User.findOne({userName: param.userName}, (err, doc) => {
      if (err) {
        res.json({
          code: 600,
          msg: err.message
        })
      } else {
        if (doc) {
          if (doc.userPwd == param.userPwd) {
            req.session.userName = param.username;
            res.json({
              code: 200,
              data: {
                session: doc,
              },
              msg: '登录成功'
            });
          }else {
            res.json({
              code: 600,
              data: '',
              msg: '账户名或密码错误'
            });
          }
        } else {
          res.json({
            code: 600,
            data: '',
            msg: '账户名不存在'
          });
        }
      }
    });
  }
});


module.exports = router;
