const mongoose = require("mongoose")

const position_model = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    cargo:{
        type: String,
        required: true
    }
})
   
module.exports = mongoose.model("position", position_model)