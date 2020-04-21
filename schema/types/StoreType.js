const locationData = `
type locationData {
    coordinates: [Float]
}
`

const storeData = `
type storeData {
    _id: String,
    storeid: Int,
    name: String,
    city: String,
}`;

const storeInputData = `
input storeInputData {
    storeid: Int,
    name: String,
    city: String,
    longitude: Float,
    latitude: Float,
}`;

const storeUpdateData = `
input storeUpdateData {
    storeid: Int!,
    name: String,
    city: String,
    coordinates: [Float],
}`;

module.exports = `${locationData}, ${storeData}, ${storeInputData}, ${storeUpdateData}`