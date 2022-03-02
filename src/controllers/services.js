const Service = require('../models/service')

// Fetching json data to store services data in the Service collection
const jsonData = require('./servicesJson')

// Posting the services in Service collection of DB hotelservices
const postServicesInDB = async () => {
  await Service.insertMany(jsonData)
  // Service.find()
  //   .then(data => console.log(data))
}

module.exports = postServicesInDB
