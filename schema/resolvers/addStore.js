const { Store } = require('../models');

let addStore = async (root,args,context,info) => {
        var inputs = {
            storeid: root.input.storeid,
            name: root.input.name,
            city: root.input.city,
            location: {
                coordinates: [root.input.longitude, root.input.latitude]
            }
        }
        // console.log("inputs are ", inputs);
        
        const model = new Store(inputs)
        const newStore = model.save();
        // console.log("Saved Store");
        // console.log(newStore);
        if(!newStore) {
            throw new Error('Error');
        }
        return newStore;
};

module.exports = addStore;