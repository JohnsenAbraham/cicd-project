const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {

    test('GET / should return 200', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBeDefined();
    });

    test('GET /health should return OK', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("OK");
    });

    test('Invalid route should return 404', async () => {
        const res = await request(app).get('/invalid');
        expect(res.statusCode).toBe(404);
    });

});
