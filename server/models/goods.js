let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let goodSchema = new Schema({
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
});


module.exports = mongoose.model('Good', goodSchema);
