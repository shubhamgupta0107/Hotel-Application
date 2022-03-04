const chai = require('chai')
const expect = chai.expect
const mongoose = require('mongoose')
const chaiHttp = require('chai-http')

const { app } = require('./server')
// const user = require('../models/user')

chai.use(chaiHttp)

describe('Home page localhost:3000', () => {
  // Get API route
  before(() => {
    mongoose.createConnection('mongodb://localhost:27017/hotelservices', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  })

  describe('GET /', () => {
    it('should GET the home page', (done) => {
      chai.request(app)
        .get('/api/users')
        .end((_err, response) => {
          expect(response).to.have.status(200)
          expect(response).to.have.header('Content-type', 'application/json')
          expect(response).to.be.a(Array)
        })
      done()
    })
  })
})
