const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  phoneno: {
    type: Number,
    required: true
  },
  alternatephoneno: {
    type: Number
  },
  servicesOpted: {
    type: Array,
    required: true
  },
  total_cost: {
    type: Number,
    default: 0
  }

})

module.exports = mongoose.model('User', userSchema)
