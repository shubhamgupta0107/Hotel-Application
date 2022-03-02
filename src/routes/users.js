const express = require('express')
const User = require('../models/user')
const router = express.Router()

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

router.post('/registration', async (req, res) => {
  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age,
    phoneno: req.body.phoneno,
    alternatephoneno: req.body.alternatephoneno
  })
  try {
    const u1 = await user.save()
    res.status(200).json(u1)
    console.log(req.body.service)
    // res.render('user', { userDetails: users })
  } catch (err) {
    res.status(400).json({ message: err })
  }
})
// router.post('')

module.exports = router
