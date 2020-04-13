const request = require('supertest')
const app = require('../app')
describe('Entrypoint tests...', () => {
  it('Checking boilerplate...', async () => {
    const res = await request(app)
      .get('/')
    expect(res.statusCode).toEqual(200)
  })
  it('Checking users boilerplate...', async () =>{
      const res = await request(app)
        .get('/users')
      expect(res.statusCode).toEqual(200)
  })
})