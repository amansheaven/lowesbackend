var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    pid : {type: Number, required: [true, "can't be blank"], index: true},
    name: {type: String, required: [true, "can't be blank"]},
    row : Number,
    col : Number,
    img : String,
}, {timestamps:true});

var ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;