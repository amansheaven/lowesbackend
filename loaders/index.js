// const mongooseLoader = require('./mongoose')
import mongoose from './mongoose'

export default async ({ expressApp }) => {
    const mongoConnection =  await mongoose();
    console.log('MongoDB Initalized')
}