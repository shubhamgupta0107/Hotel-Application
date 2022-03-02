const mongoose = require('mongoose')

// Fetch User schema
const User = require('./user')

const Service = require('./service')

const registerSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: User,
    required: true,
    index: true
  },
  service_id: {
    type: mongoose.Schema.ObjectId,
    ref: Service,
    required: true,
    index: true
  },
  service_name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Register', registerSchema)
