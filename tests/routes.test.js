const supertest = require('supertest')
const app = require('../app')
const request = supertest(app)
describe('Entrypoint tests...', () => {
  it('Checking boilerplate...', async () => {
    const res = await request.get('/')
    expect(res.statusCode).toEqual(200)
  })
  it('Checking users boilerplate...', async (done) =>{
      const res = await request.get('/users')
      expect(res.statusCode).toEqual(200)
  })
})

// afterAll((done) => {
//   app.exit()
//   done();
// });