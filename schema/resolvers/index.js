const getAllUsers = require('./getallusers');
const addUser = require('./addUser');
const updateUser = require('./updateUser')

var resolvers = {
    getAllUsers: getAllUsers,
    addUser: addUser,
    updateUser: updateUser,
};

module.exports = resolvers;