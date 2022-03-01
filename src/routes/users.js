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
  try {
    const users = new User({
      fname: req.body.fname,
      lname: req.body.lname
    })
    // res.json(customers)
    // console.log(users)
    res.render('user', { userDetails: users })
  } catch (err) {
    res.send(err)
  }
})
// router.post('')

module.exports = router
