const request = require('supertest');
const app = require('../src/app');

test('GET / should return message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe("CI/CD Pipeline Working!");
});