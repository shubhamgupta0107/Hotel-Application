const express = require('express')
// const path = require('path')
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
    res.render('error', { title: 'Error Page', errorMsg: err })
    // res.json({ message: err })
  }
})

router.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.send(user)
  } catch (err) {
    res.render('error', { title: 'Error Page', errorMsg: err })
  }
})

router.post('/registration', async (req, res) => {
  try {
    const addingDetails = () => {
      user = new User({
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
    }
    let register, user
    let totalCost = Number(0)
    console.log(typeof req.body.service)
    if (typeof req.body.service === 'string') {
      // console.log('HIGYDG')
      const arr = []
      arr.push(req.body.service)
      req.body.service = arr
    }
    req.body.service.forEach(async element => {
      const service = await Service.find({ service_name: element })
      console.log(service, service[0].price)
      totalCost += service[0].price
    })
    setTimeout(async () => {
      console.log(totalCost)
      addingDetails()
      // const user = new User({
      //   fname: req.body.fname,
      //   lname: req.body.lname,
      //   email: req.body.email,
      //   gender: req.body.gender,
      //   age: req.body.age,
      //   phoneno: req.body.phoneno,
      //   alternatephoneno: req.body.alternatephoneno,
      //   servicesOpted: req.body.service,
      //   total_cost: totalCost
      // })
      await req.body.service.forEach(async element => {
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
      await user.save()
      // res.send(user)

      // Redirecting to another page
      res.redirect(`http://localhost:3000/api/registration/${user._id}`)
    }, 100)
  } catch (err) {
    res.render('error', { title: 'Error Page', errorMsg: err })
    console.log({ message: err })
  }
})

router.get('/registration/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    // user = JSON.stringify(user)
    // const name = user.fname + user.lname
    // const services = user.servicesOpted
    // const totalCost = user.total_cost
    console.log(user)
    res.render('userDetails', { fname: user.fname, lname: user.lname, services: user.servicesOpted, totalCost: user.total_cost })
    // res.render('userDetails', { user: user.toJSON() })
    // res.render('userDetails', { name: name, services: services, totalCost: totalCost })
  } catch (err) {
    res.render('error', { title: 'Error Page', errorMsg: err })
  }
})

module.exports = router
