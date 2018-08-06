import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    hello_world: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

let HelloWorld = mongoose.model('HelloWorld', Schema)

export default HelloWorld
