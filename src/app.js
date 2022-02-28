const { mongoose } = require('mongoose')
const { app } = require('./server.js')

const port = process.env.PORT || 3000
const url = 'mongodb://localhost:27017/hotelservices'

/** Created a connection with mongodb */
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
    console.error('Server connection failed due to ' + err)
  }
}

createConnection()

module.exports = {
  createConnection
}
