const { User } = require('../models')

let addUser = async (root,args,context,info) => {
        console.log("rootParams", root.input);
        
        const uModel = new User(root.input);
        const newUser = await uModel.save();
        // console.log("Saved User");
        // console.log(newUser);
        if(!newUser) {
            throw new Error('Error');
        }
        return newUser;
};

module.exports = addUser;