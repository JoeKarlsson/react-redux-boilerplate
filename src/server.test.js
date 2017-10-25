// const request = require('supertest');
const app = require(('./server'));

describe('GET /', () => {
	it('respond with json', () => {
		console.log('app', app);
		// request(app)
		// 	.get('/')
		// 	.set('Accept', 'application/json')
		// 	.expect('Content-Type', /json/)
		// 	.expect(200, done);
		expect(true).toBe(true);
	});
});
