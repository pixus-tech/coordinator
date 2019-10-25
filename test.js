const request = require('supertest')
const app = require('./app')

describe('the ping endpoint', () => {
  test('responds with the alive message', async () => {
    const response = await request(app).get('/ping')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ status: 'alive' })
  })
})
