let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//加载模型
let Goods = require('../models/goods');
let User = require('../models/user');

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/db_shop');

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


/* goods 查询商品列表路由 */
router.get('/', (req, res) => {
    let page = parseInt(req.query.page);
    let pageSize = parseInt(req.query.pageSize);
    let sort = parseInt(req.query.sort);
    let skip = pageSize * (page - 1);
    let priceChecked = req.query.priceChecked;

    let params = {};


    if (priceChecked != 'all') {
        priceChecked = JSON.parse(priceChecked);
        let priceGT = Number(priceChecked.startPrice),
            priceLte = Number(priceChecked.endPrice);

        params = {
            productPrice: {
                $gt: priceGT,
                $lte: priceLte
            }
        }
    }
    Goods.find(params).skip(skip).limit(pageSize).sort({productPrice: sort}).exec((err, doc) => {
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
    });
});


/* goods 添加购物车路由 */
router.post('/addCart', (req, res) => {
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


});


module.exports = router;










