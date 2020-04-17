const { User } = require('../models')

let addUser = async (root,args,context,info) => {
        console.log("rootParams", root.inputs);
        
        const uModel = new User(root.inputs);
        const newUser = await uModel.save();
        console.log("Saved User");
        console.log(newUser);
        if(!newUser) {
            throw new Error('Error');
        }
        return newUser;
};

module.exports = addUser;