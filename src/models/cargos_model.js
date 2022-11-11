const mongoose = require("mongoose")

const cargo_model = new mongoose.Schema({
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
   
module.exports = mongoose.model("Cargo", cargo_model)