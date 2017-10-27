import * as types from '../constants/actionTypes';

describe('Action Types', () => {
	describe('FETCH_POSTS_REQUEST', () => {
		it('should return the correct action', () => {
			expect(types.FETCH_POSTS_REQUEST).toBe('FETCH_POSTS_REQUEST');
		});
	});

	describe('FETCH_POSTS_SUCCESS', () => {
		it('should return the correct action', () => {
			expect(types.FETCH_POSTS_SUCCESS).toBe('FETCH_POSTS_SUCCESS');
		});
	});

	describe('FETCH_POSTS_FAILURE', () => {
		it('should return the correct action', () => {
			expect(types.FETCH_POSTS_FAILURE).toBe('FETCH_POSTS_FAILURE');
		});
	});

	describe('REMOVE_ITEM', () => {
		it('should return the correct action', () => {
			expect(types.REMOVE_ITEM).toBe('REMOVE_ITEM');
		});
	});
});
