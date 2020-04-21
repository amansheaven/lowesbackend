var mongoose = require('mongoose');

var StoreSchema = new mongoose.Schema({
        storeid: {type: Number, required: [true, "can't be blank"], index: true},
        name: String,
        city: String,
        location: {
            type: { type: String, default: 'Point' },
            coordinates: {type: [Number]}
           }
    }, {timestamps: true});

StoreSchema.index({ location: "2dsphere" });

var StoreModel = mongoose.model('Store', StoreSchema);

module.exports = StoreModel;