const express = require('express')
const User = require('../models/user')
const router = express.Router()
const Customer = require('../models/user')

router.get('/users', async (req, res) => {
  try {
    const users = await Customer.find()
    // res.json(customers)
    // console.log(users)
    res.render('user', { userDetails: users })
  } catch (err) {
    res.send(err)
  }
})

router.post('/user', async (req, res) => {
  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age,
    phoneno: req.body.phoneno
  })
  try {
    const u1 = await user.save()
    res.json(u1)
    // res.render('user', { userDetails: users })
  } catch (err) {
    res.status(400).json({ message: err })
  }
})
// router.post('')

module.exports = router
