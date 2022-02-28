const chai = require('chai')
const expect = chai.expect()
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

const app = require('./app')

describe('app', () => {
  context('createConnection', () => {
    it('should create the mongodb connection', async () => {
      await expect(app.createConnection()).to.eventually.exist
    })
  })
})
