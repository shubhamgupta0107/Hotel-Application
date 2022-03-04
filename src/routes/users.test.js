const chai = require('chai')
const mongoose = require('mongoose')
const chaiHttp = require('chai-http')

chai.should()

const { app } = require('../server')
// const user = require('../models/user')

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
          response.should.have.status(200)
          response.should.have.header('Content-type', 'application/json')
          response.should.be.a(Array)
        })
      done()
    })

    it('should NOT GET all the users', (done) => {
      chai.request(app)
        .get('/api/user')
        .end((_err, response) => {
          response.should.have.status(404)
          response.should.have.header('Content-type', 'text/html; charset=utf-8')
        })
      done()
    })

    // it('should get the user by id', (done) => {
    //   before(() => {
    //     chai.request(app)
    //       .get('/api/registration/:id')
    //   })
    //   chai.request(app)
    //     .get('/api/registration/:id')
    //     .end((_err, response) => {
    //       expect(response).to.have.status(200)
    //       expect(response).to.have('Content-type', 'application/json')
    //       expect(response).to.be.a(Array)
    //     })
    //   done()
    // })
  })
})
