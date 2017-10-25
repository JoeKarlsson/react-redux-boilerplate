import nock from 'nock';
import apiMiddleware from './api';

describe('API middleware', () => {
	const create = () => {
		const store = {
			getState: jest.fn(() => ({})),
			dispatch: jest.fn(),
		};
		const next = jest.fn();
		const invoke = action => apiMiddleware(store)(next)(action);

		return { store, next, invoke };
	};

	afterEach(() => {
		nock.cleanAll();
	});

	it('should pass through non-function action', () => {
		const { next, invoke } = create();
		const action = { type: 'TEST' };
		invoke(action);
		expect(next).toHaveBeenCalledWith(action);
	});
});
