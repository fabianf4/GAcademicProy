const mongoose = require("mongoose")

const student_model = new mongoose.Schema({
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
    type: String,
    required: true
  }
})

module.exports = mongoose.model("student", student_model)