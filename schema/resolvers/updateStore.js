const { Store } = require('../models')

let updateStore = async (root,args,context,info) => {
        console.log(root);
                
        let updStore = {};
        if(root.input.name) {
            updStore.name = root.input.name;
        }
        if(root.input.city) {
            updStore.city = root.input.city;
        }
        if(root.input.coordinates) {
            updStore.location.coordinates = root.input.coordinates;
        }
        const uStore = await Store.updateOne({ storeid : root.input.storeid }, updateUser, {new: true})
        console.log(uStore)
        if(!uStore) {
            throw new Error('Error')
        }
        return uStore
};

module.exports = updateStore;