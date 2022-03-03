const res = require('express/lib/response')
const { mongoose } = require('mongoose')
const { app } = require('./server.js')

const port = process.env.PORT || 3000
const url = 'mongodb://localhost:27017/hotelservices'
// const postServices = require('./controllers/services')

/* Created a connection with mongodb */
async function createConnection () {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(port, () => {
      console.log(`Server ready on localhost:${port}`)
    })
  } catch (err) {
    res.render('error', { title: 'Error Page', errorMsg: err })
    console.error('Server connection failed due to ' + err)
  }
}

createConnection()

// postServices()

module.exports = {
  createConnection, app
}
