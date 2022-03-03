const express = require('express')
const router = express.Router()

// Fetching User collection
const User = require('../models/user')

// Fetching Register collection
const Register = require('../models/register')

// Fetching Service collection
const Service = require('../models/service')

// console.log(User.find())
router.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    // console.log(users)
    res.json({ userDetails: users })
    // res.render('user', { userDetails: user })
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

router.get('/user/:id', async (req, res) => {
  await User.findById(req.params.id)
})

router.post('/registration', async (req, res) => {
  try {
    let register
    let totalCost = Number(0)
    req.body.service.forEach(async element => {
      const service = await Service.find({ service_name: element })
      console.log(service, service[0].price)
      totalCost += service[0].price
    })
    setTimeout(async () => {
      console.log(totalCost)
      const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        gender: req.body.gender,
        age: req.body.age,
        phoneno: req.body.phoneno,
        alternatephoneno: req.body.alternatephoneno,
        servicesOpted: req.body.service,
        total_cost: totalCost
      })
      req.body.service.forEach(async element => {
        const service = await Service.find({ service_name: element })
        // console.log(service[0], service[0]._id)
        register = await Register.create({
          user_id: user._id,
          service_id: service[0]._id,
          service_name: element
        })
        await register.save()
      })
      console.log(user)
      const u1 = await user.save()
      // console.log(u1)
      res.status(200).json(u1)
    }, 100)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

module.exports = router
