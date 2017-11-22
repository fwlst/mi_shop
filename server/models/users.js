var mongoose = require('mongoose');
var userSchema =  new mongoose.Schema({
    userId: String,
    userName: String,
    userPwd: String,
    orderList: Array,
    cartList: [
      {
        goodName: String,   //名称
        goodDec: String,    //简介
        goodPrice: Number,  //价格
        goodStock: Number,  //库存
        goodImg: String,    //商品图
        goodTag: String,    //标签
        goodTagImg: String, //标签图
        goodType: String,   //类型
        goodGroom: Boolean, //推荐
        checked: Boolean,   //是否选中
        goodNum: Number     //选中数量
      }
    ],
    addressList: Array
});


module.exports = mongoose.model('User',userSchema);
