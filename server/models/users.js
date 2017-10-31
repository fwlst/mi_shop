var mongoose = require('mongoose');
var userSchema =  new mongoose.Schema({
    userId: String,
    userName: String,
    userPwd: String,
    orderList: Array,
    cartList: [
        {
            productId:String,
            productName: String,
            productPrice: Number,
            productImg: String,
            checked: Boolean,
            productNum: String
        }
    ],
    addressList: Array
});


module.exports = mongoose.model('User',userSchema);
