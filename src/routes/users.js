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

// const checkUserIfAlreadyInDatabase = async (req, res) => {
//   if(req.body.email === )
// }

router.post('/registration', async (req, res) => {
  try {
    const user = new User({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      gender: req.body.gender,
      age: req.body.age,
      phoneno: req.body.phoneno,
      alternatephoneno: req.body.alternatephoneno,
      servicesOpted: req.body.service
    })
    const u1 = await user.save()
    req.body.service.forEach(async element => {
      // console.log('I am inside the function')
      const service = await Service.find({ service_name: element })
      // console.log(service[0], service[0]._id)
      const register = await Register.create({
        user_id: user._id,
        service_id: service[0]._id,
        service_name: element
      })
      // console.log(register)
      await register.save()
    })
    res.status(200).json(u1)
    // console.log(req.body.service)
    // res.render('user', { userDetails: users })
  } catch (err) {
    res.status(400).json({ message: err })
  }
})

module.exports = router
