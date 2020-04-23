const productData = `
type productData {
    _id: String,
    pid: Int,
    name: String,
    row: Int,
    col: Int,
    weight: Int,
    tag: String,
    img: String
}`;

const productInputData = `
input productInputData {
    pid: Int!,
    name: String!,
    row: Int,
    col: Int,
    weight: Int,
    tag: String,
    img: String
}
`

module.exports = `${productData}, ${productInputData}`