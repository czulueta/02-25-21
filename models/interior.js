const mongoose = require("mongoose")
const Schema = mongoose.Schema

const interiorSchema = new Schema({
    fourHundredSquareFeet: {
        type: String,
    },
    eightHundredSquareFeet: {
        type: String,
    },
    tweleveHundredSquareFeet: {
        type: String,
    }
})

module.exports = mongoose.model("Interior", interiorSchema)