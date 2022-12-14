const mongoose = require("mongoose")

const user_model = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
    unique: true
  },
  username:{
    type:String,
    required:true
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  position: {
    type: mongoose.ObjectId,
    required: true
  }
})

module.exports = mongoose.model("user", user_model)