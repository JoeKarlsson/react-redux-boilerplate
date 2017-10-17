import nock from 'nock';
import apiMiddleware from './api';

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

test('api redux middleware passes through non-function action', () => {
	const { next, invoke } = create();
	const action = { type: 'TEST' };
	invoke(action);
	expect(next).toHaveBeenCalledWith(action);
});
