import * as reducers from './index';

describe('Reducers', () => {
	it('should return the store', () => {
		expect('redditItemReducer' in reducers).toBe(true);
	});
});
