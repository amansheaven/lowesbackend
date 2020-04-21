const allQueries = `
    type Query {
        getAllUsers: [userData],
        getUser(username: String!): userData,
        getStore(storeid: Int!): storeData,
        geoStore(latitude: Float, longitude: Float): storeData,
    }`;

module.exports = allQueries
