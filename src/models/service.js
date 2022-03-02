const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  sername: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Service', serviceSchema)
