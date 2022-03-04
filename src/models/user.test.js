const chai = require('chai')
const request = require('chai-http')

const expect = chai.expect
const { app } = require('../server.js')
const User = require('./user')

describe('User Schema Testing', function () {
  describe('GET /users', function () {
    it('should return several user', function (done) {
      chai.request(app)
        .get('api/users')
        .end((err, res) => {
          expect(res).to.have.status(200) // <= Test completes before this runs
        })

      const user = response.body
      expect(user).to.be.an(Array)
      // expect(user).length.to.be.greaterThan(0)
      done()
    })

    it('should have valid user', (done) => {
      const response = request(app)
        .get('api/user')
        .expect(404)
        .expect('Content-Type', 'text/html; charset=utf-8')

      const user = response.body
      expect(user).to.be.an(Array)

      User.forEach(User => {
        expect(User.fname).to.be.a(String)
        expect(User.lname).to.be.a(String)
        expect(User.age).to.be.a(Number)
        expect(User.email).to.be.a(String)
        expect(User.gender).to.be.a(String)
        expect(User.phoneno).to.be.an(Number)
        expect(User.alternatephoneno).to.be.an(Number)
        expect(User.servicesOpted).to.be.an(Array)
        expect(User.total_cost).to.be.an(Number)
      })
      done()
    })
  })
})
