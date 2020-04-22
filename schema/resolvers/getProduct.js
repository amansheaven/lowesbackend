const { Product } = require('../models')

let getProduct = (root) => {
    return Product.findOne({pid: root.pid}, (err,auth) => {
        if(err){ console.log(err);};
        console.log("Fetched Product")
    })
}

module.exports = getProduct