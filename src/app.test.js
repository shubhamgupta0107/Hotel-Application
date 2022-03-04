const chai = require('chai')
// const expect = chai.expect()
const mongoose = require('mongoose')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

describe('app', () => {
  context('createConnection', () => {
    before((done) => {
      // tells mongoose to use ES6 implementation of promises
      mongoose.Promise = global.Promise
      mongoose.connect('mongodb://localhost:27017/hotelservices', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      done()
    })
    // runs before each test
    beforeEach((done) => {
      mongoose.connection.collections.users.drop(() => {
        done()
      })
      it('should create the mongodb connection', () => {
        mongoose.connection
          .once('open', () => console.log('Connected!'))
          .on('error', (error) => {
            console.warn('Error : ', error)
          })
      })
    })
  })
})
