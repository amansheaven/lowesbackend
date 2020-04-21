const { User } = require('../models')

let getAllUsers = (root,args,context,info) => {
    
    return User.findOne({username: root.username}, (err, auth) => {
            console.log("Fetched Users");
        });

}

module.exports = getAllUsers;