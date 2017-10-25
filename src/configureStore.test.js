import configureStore from './configureStore';

describe('configureStore', () => {
	it('should return a function', () => {
		expect(typeof configureStore).toBe('function');
	});

	it('should return a store when invoked', () => {
		const store = configureStore();
		expect('subscribe' in store).toBe(true);
		expect('getState' in store).toBe(true);
		expect('replaceReducer' in store).toBe(true);
	});
});
