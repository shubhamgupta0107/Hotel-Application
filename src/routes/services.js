const express = require('express')
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
