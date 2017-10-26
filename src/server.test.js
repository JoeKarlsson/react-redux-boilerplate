const request = require('supertest');
const app = require(('./server'));

describe('Server', () => {

	describe('GET /', () => {
		it('respond with text/html', (done) => {
			request(app)
				.get('/')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'text/html; charset=UTF-8')
				.expect(200, done);
		});

		it('should any URL to your app', (done) => {
			request(app)
				.get('/gooblygook')
				.set('Accept', 'application/json')
				.expect(200, done);
		});
	});

});
