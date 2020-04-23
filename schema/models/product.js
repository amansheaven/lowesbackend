var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    pid : {type: Number, required: [true, "can't be blank"], index: true},
    name: {type: String, required: [true, "can't be blank"]},
    row : Number,
    col : Number,
    weight: Number,
    tag : String,
    img : String,
}, {timestamps:true});

var ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;