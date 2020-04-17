const allMutations = `
    type Mutation {
        addUser(input:userInputData!): userData,
        updateUser(input:userUpdateData!): updateData,
    }
`;

module.exports = allMutations