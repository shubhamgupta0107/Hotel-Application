const express = require('express')
// const fetch = require('node-fetch')
const Service = require('../models/service')
const router = express.Router()

router.get('/services', async (req, res) => {
  try {
    const services = await Service.find()
    res.json({ serviceDetails: services })
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

const postServicesInDB = require('../controllers/services')
postServicesInDB()

router.post('/service', async (req, res) => {
  try {
    const services = await Service.find()
    res.json({ serviceDetails: services })
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

// router.post('/registration', async (req, res) => {
// })

// const jsonData = require('../services.json')

// async function postServices (req, res) {
//   const params = {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(jsonData)
//   }
//   app.post('/services', (req, res) => {
//     res.json(json)
//   })
// }

// module.exports = postServices
