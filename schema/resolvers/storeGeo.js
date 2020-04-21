const { Store } = require('../models')

let storeGeo = (root,args,context,info) => {

    console.log("geo Query",root.longitude)
    return Store.findOne({
        location: {
         $near: {
          $maxDistance: 100,
          $geometry: {
           type: "Point",
           coordinates: [ root.latitude ,root.longitude ]
          }
         }
        }
       }, (err, auth) => {
            console.log("Fetched GeoStores");
        });

}

module.exports = storeGeo;