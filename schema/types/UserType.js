const userData = `
type userData {
    _id: String,
    username: String,
    cart: [Int],
    image: String,
}`;

const updateData = `
type updateData {
    n: Int,
    ok: Int,
    nModified: Int
}`;

const userInputData = `
input userInputData {
    username: String!,
    cart: [Int],
    image: String
}`;

const userUpdateData = `
input userUpdateData {
    username: String!,
    cart: [Int],
    image: String
}`;

module.exports = `${userData}, ${updateData}, ${userInputData}, ${userUpdateData}`