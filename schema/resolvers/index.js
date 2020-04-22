const addUser = require('./addUser'); //User Resolvers
const getUser = require('./getUser');
const getAllUsers = require('./getallusers');
const updateUser = require('./updateUser');
const addStore = require('./addStore'); //Store Resolvers
const getStore = require('./getStore');
const updateStore = require('./updateStore');
const storeGeo = require('./storeGeo');
const addProduct = require('./addProduct'); //Product Resolvers
const getProduct = require('./getProduct');
const getProductBatch = require('./getProductBatch');

var resolvers = {
    getAllUsers: getAllUsers,
    addUser: addUser,
    updateUser: updateUser,
    getUser : getUser,
    getStore : getStore,
    geoStore : storeGeo,
    addStore : addStore,
    updateUser : updateStore,
    addProduct : addProduct,
    getProduct : getProduct,
    getProductBatch : getProductBatch
};

module.exports = resolvers;