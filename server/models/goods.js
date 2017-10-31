let mongoose = require('mongoose');
let Schema =  mongoose.Schema;
let productSchema = new Schema({
    productId: Number,
    productName: String,
    productPrice: Number,
    productImg: String,
    checked: Boolean,
    productNum: String
});


module.exports = mongoose.model('Good',productSchema);
