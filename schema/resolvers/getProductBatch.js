const { Product } = require('../models')

let getProduct = (root) => {
    return Product.find({
        pid: {
            "$in" : root.pidarray
        }
    }, (err,auth) => {
        if(err){ console.log(err);};
        console.log("Fetched Batch Products")
    })
}

module.exports = getProduct