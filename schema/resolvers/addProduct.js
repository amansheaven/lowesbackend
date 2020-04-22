const { Product } = require('../models');

let addProduct = async (root) => {
    const model = new Product(root.input);
    const newProduct = await model.save();

    if(!newProduct) {
        throw new Error('Error Product');
    }
    return newProduct;
};

module.exports = addProduct;