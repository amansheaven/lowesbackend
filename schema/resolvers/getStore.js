const { Store } = require('../models')

let getAllStores = (root,args,context,info) => {
    return Store.findOne({storeid: root.storeid}, (err, auth) => {
            console.log("Fetched Stores");
        });

}

module.exports = getAllStores;