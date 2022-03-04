const chai = require('chai')
const expect = chai.expect
const mongoose = require('mongoose')
const chaiHttp = require('chai-http')

const { app } = require('../server')

chai.use(chaiHttp)

describe('Users API', () => {
  // Get API route
  before(() => {
    mongoose.createConnection('mongodb://localhost:27017/hotelservices', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  })

  describe('GET /api/users', () => {
    it('should GET all the users', (done) => {
      chai.request(app)
        .get('/api/users')
        .end((_err, response) => {
          expect(response).to.have.status(200)
          expect(response).to.have.header('Content-type', 'application/json')
          expect(response).to.be.a(Array)
        })
      done()
    })

    it('should NOT GET all the users', (done) => {
      chai.request(app)
        .get('/api/user')
        .end((_err, response) => {
          expect(response).to.have.status(404)
          expect(response).to.have('Content-type', 'application/json')
          expect(response).to.be.a(Array)
        })
      done()
    })
  })
})
