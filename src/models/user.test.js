
const chai = require('chai')
const request = require('supertest')

const expect = chai.expect
const app = require('../server.js')
const user = require('./user')

describe('user', function () {
  describe('GET /user', function () {
    it('should return  several user', async function () {
      const response = await request(app)
        .get('/user')
        .expect(200)
        .expect('Content-Type', /json/)

      const user = response.body
      expect(user).to.be.an('array')
      expect(user).length.to.be.greaterThan(0)
    })

    it('should have valid user', async function () {
      const response = await request(app)
        .get('/user')
        .expect(200)
        .expect('Content-Type', /json/)

      const user = response.body
      expect(user).to.be.an('array')

      user.forEach(user => {
        expect(user.fname).to.be.a('string')
        expect(user.lname).to.be.a('string')
        expect(user.age).to.be.a('number')
        expect(user.email).to.be.a('string')
        expect(user.gender).to.be.a('string')
        expect(user.phoneno).to.be.an('number')
        expect(user.alternatephoneno).to.be.an('number')
        expect(user.serviceOpted).to.be.an('array')
        expect(user.total_cost).to.be.an('number')
      })
    })
  })
})
