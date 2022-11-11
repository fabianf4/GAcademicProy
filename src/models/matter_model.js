const mongoose = require ("mongoose")

const matter_model = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        required: true
    },
    teacher: {
        type: mongoose.ObjectId,
        required: true
    },
    students: [
        mongoose.ObjectId
    ],
    activities: [
        mongoose.ObjectId
    ]
})

module.exports = mongoose.model("matter", matter_model)
