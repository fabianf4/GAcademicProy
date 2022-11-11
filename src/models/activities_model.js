const mongoose = require("mongoose")

const activities_model = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    score: {
        type: Number
    },
    percentage: {
        type: Number,
        required: true
    },
    dateDelivery: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("activities", activities_model)