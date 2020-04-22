const allMutations = `
    type Mutation {
        addUser(input:userInputData!): userData,
        updateUser(input:userUpdateData!): updateData,
        addStore(input:storeInputData!): storeData,
        updateStore(input:storeUpdateData!): updateData,
        addProduct(input:productInputData!): productData,
    }
`;

module.exports = allMutations