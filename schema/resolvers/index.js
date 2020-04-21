const getAllUsers = require('./getallusers');
const addUser = require('./addUser');
const updateUser = require('./updateUser');
const getUser = require('./getUser');
const getStore = require('./getStore');
const storeGeo = require('./storeGeo');
const addStore = require('./addStore');
const updateStore = require('./updateStore');

var resolvers = {
    getAllUsers: getAllUsers,
    addUser: addUser,
    updateUser: updateUser,
    getUser : getUser,
    getStore : getStore,
    geoStore : storeGeo,
    addStore : addStore,
    updateUser : updateStore,
};

module.exports = resolvers;