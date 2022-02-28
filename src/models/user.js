const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: Boolean,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  phoneno: {
    type: Number,
    required: true,
    unique: true
  },
  alternatephoneno: {
    type: Number,
    unique: true
  }

})

module.exports = mongoose.model('User', userSchema)
