const { User } = require('../models')

let getAllUsers = (root,args,context,info) => {

    return User.find({}, (err, auth) => {
            console.log("Fetched Users");
        });

}

module.exports = getAllUsers;