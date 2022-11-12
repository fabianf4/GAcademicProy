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
    credits: {
        type: Number,
        required: true
    },
    position: {
        type: mongoose.ObjectId,
        required: true
    },
    teacher: {
        type: mongoose.ObjectId,
        required: true
    },
    students: [{
        type: mongoose.ObjectId,
        ref: "user"
    }
    ],
    activities: [{
        type: mongoose.ObjectId,
        ref: "activities"
    }
    ]
})

module.exports = mongoose.model("matter", matter_model)
