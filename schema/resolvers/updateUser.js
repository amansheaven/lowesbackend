const { User } = require('../models')

let updateUser = async function(root, param) {
            console.log(root);
            
           let updateUser = {};
            if(root.input.cart) {
                updateUser.cart = root.input.cart
            }
            if(root.input.image) {
                updateUser.image = root.input.image
            }
    
           const uUser = await User.updateOne({ username : root.input.username }, updateUser, {new: true})
           console.log(uUser)
           if(!uUser) {
               throw new Error('Error')
           }
           return uUser
        }

module.exports = updateUser