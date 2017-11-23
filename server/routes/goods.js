let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//加载模型
let Goods = require('../models/goods');
let User = require('../models/users');

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/db_shop', {
  useMongoClient: true,
});

mongoose.connection.on('connected', () => {
  console.log('mongodb connected success');
});

//数据库连接失败监听
mongoose.connection.on('error', () => {
  console.log('mongodb connected fail');
});


//数据库断开监听
mongoose.connection.on('disconnected', () => {
  console.log('mongodb connected disconnected');
});


/*
* 添加商品路由
* */
router.post('/addGood', (req, res, next) => {

  /*添加模拟数据*/
  let goods = require('../mork/mork.json').goods;
  goods.forEach((arr) => {
    Goods.create(arr)
  });

  res.json({
    code: 200,
    data: '',
    msg: '商品添加成功'
  });

  /*


    let good = req.body.good;
    if (good.goodName === '') {
      res.json({
        code: 600,
        msg: '商品名称不能为空'
      })
    } else if (good.goodPrice === '') {
      res.json({
        code: 600,
        msg: '商品价格不能为空'
      })
    } else if (good.goodImg === '') {
      res.json({
        code: 600,
        msg: '商品图片不能为空'
      })
    } else {
      Goods.findOne({goodName: good.goodName}, (err, doc) => {
        if (err) {
          res.json({
            code: 600,
            msg: err.message
          })
        } else {
          if (doc) {
            res.json({
              code: 600,
              msg: '该商品已存在'
            });
          } else {
            let goods = require('../mork/mork.json');
            console.log(goods);
            Goods.create(good, (createErr, createDoc) => {
              if (createErr) {
                res.json({
                  code: 600,
                  msg: err.message
                })
              } else {
                res.json({
                  code: 200,
                  data: createDoc,
                  msg: '商品添加成功'
                });
              }
            })
          }
        }
      })
    }
  */


});

/*
* 加入购物车
* */

router.post('/addCart', (req, res) => {
  let userName = req.session.userName;
  let goodId = req.body.goodId;

  User.findOne({userName: userName}).then((userDoc, err) => {
    if (userDoc) {
      let goodItem = '';
      userDoc.cartList.forEach((arr, index) => {
        if (arr._id.toString() === goodId) {
          goodItem = arr;
          arr.goodNum++;
          console.log(arr.goodNum);
        }
      });

      if (goodItem) {
        userDoc.save().then((saveDoc, err) => {
          if (saveDoc) {
            res.json({
              code: 200,
              data: '添加成功',
              msg: 'OK'
            });
          } else {
            res.json({
              code: 200,
              data: '添加失败',
              msg: 'OK'
            });
          }
        })
      }else {
        Goods.findOne({_id: goodId}).then((goodDoc,err)=>{
          if(goodDoc){
            goodDoc.goodNum = 1;
            goodDoc.checked = true;
            userDoc.cartList.push(goodDoc);
            userDoc.save().then((doc,err) => {
              if(doc){
                res.json({
                  code: 200,
                  data: '添加成功',
                  msg: 'OK'
                });
              }else {
                res.json({
                  code: 600,
                  msg: err.message
                })
              }
            })
          }
        })
      }
    } else {
      res.json({
        code: 600,
        msg: err.message
      })
    }
  })


  /*User.findOne({userName: userName}, (err1, userDoc) => {
    if (err1) {
      res.json({
        code: 600,
        msg: err1.message
      })
    } else {
      if (userDoc) {
        let goodItem = '';
        userDoc.cartList.forEach((arr, index) => {
          if (arr._id.toString() === goodId) {
            goodItem = arr;
            arr.goodNum++;
            console.log(arr.goodNum);
          }
        });


        if (goodItem) {
          userDoc.save((err3, doc) => {
            console.log(doc);
            if (err3) {
              res.json({
                code: 600,
                msg: err3.message
              })
            } else {
              res.json({
                code: 200,
                data: '添加成功',
                msg: 'OK'
              });
            }
          })
        } else {
          Goods.findOne({_id: goodId}, (err2, goodDoc) => {
            if (err2) {
              res.json({
                code: 600,
                msg: err2.message
              })
            } else {
              if (goodDoc) {
                let aa = goodDoc;
                aa.goodNum = 1;
                aa.checked = true;
                console.log(aa);
                userDoc.cartList.push(aa);
                userDoc.save((err3, doc) => {
                  if (err3) {
                    res.json({
                      code: 600,
                      msg: err3.message
                    })
                  } else {
                    res.json({
                      code: 200,
                      data: '添加成功',
                      msg: 'OK'
                    });
                  }
                })
              }
            }
          })
        }


      }
    }
  })*/
});


/*
* 推荐商品路由列表
* */
/*
router.post('/groom', (req, res) => {
  let params = {
    goodGroom: true
  };
  Goods.find(params, (err, doc) => {
    if (err) {
      res.json({
        code: 600,
        msg: err.message
      })
    } else {
      res.json({
        code: 200,
        data: {
          count: doc.length,
          goodList: doc
        },
        msg: 'OK'
      });
    }
  })
});
*/


/*
* goods 查询商品列表路由
* */
router.post('/goodsList', (req, res) => {
  let goodGroom = req.body.goodGroom;
  let goodType = req.body.goodType;
  let pageIndex = parseInt(req.body.pageIndex);
  let pageSize = parseInt(req.body.pageSize);
  let skip = pageSize * (pageIndex - 1);

  let params = {};
  if (goodGroom) {
    params.goodGroom = goodGroom
  } else {
    params.goodType = goodType
  }
  Goods.find(params).skip(skip).limit(pageSize).exec().then((doc, err) => {
    if (err) {
      res.json({
        code: 600,
        msg: err.message
      })
    } else {
      res.json({
        code: 200,
        data: {
          goodList: doc
        },
        msg: 'OK'
      });
    }
  });


});


/* goods 添加购物车路由 */
/*router.post('/addCart', (req, res) => {
    let userId = '1007',
        productId = Number(req.body.productId);
    User.findOne({userId: userId}, (err1, userDoc) => {
        if (err1) {
            res.json({
                code: 600,
                msg: err1.message
            })
        } else {
            if (userDoc) {
                let goodItem = '';
                userDoc.cartList.forEach((arr, index) => {
                    if (arr.productId == productId) {
                        goodItem = arr;
                        arr.productNum++;
                    }
                });


                if (goodItem) {
                    userDoc.save((err3, doc) => {
                        if (err3) {
                            res.json({
                                code: 600,
                                msg: err3.message
                            })
                        } else {
                            res.json({
                                code: 200,
                                data: '添加成功',
                                msg: 'OK'
                            });
                        }
                    })
                } else {
                    Goods.findOne({productId: productId}, (err2, goodDoc) => {
                        if (err2) {
                            res.json({
                                code: 600,
                                msg: err2.message
                            })
                        } else {
                            if (goodDoc) {
                                let aa = goodDoc;
                                aa.productNum = 1;
                                aa.checked = true;
                                console.log(aa);
                                userDoc.cartList.push(aa);
                                userDoc.save((err3, doc) => {
                                    if (err3) {
                                        res.json({
                                            code: 600,
                                            msg: err3.message
                                        })
                                    } else {
                                        res.json({
                                            code: 200,
                                            data: '添加成功',
                                            msg: 'OK'
                                        });
                                    }
                                })
                            }
                        }
                    })
                }


            }
        }
    })


});*/


module.exports = router;










