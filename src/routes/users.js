const express = require('express')
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

// router.post('')

module.exports = router
