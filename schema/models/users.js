var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
        username: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
        cart: [Number],
        image: String
    }, {timestamps: true});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;