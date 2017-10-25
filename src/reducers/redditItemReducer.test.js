import { List } from 'immutable';
import reducer from './redditItemReducer';
import * as types from '../constants/actionTypes';

describe('Reddit Item Reducer', () => {
	describe('initial state', () => {
		it('should return the initial state', () => {
			const initialState = List();
			expect(reducer(undefined, {})).toEqual(initialState);
		});
	});

	describe('FETCH_POSTS_REQUEST', () => {
		expect(
			reducer([], {
				type: types.FETCH_POSTS_REQUEST,
			}),
		).toEqual([]);
	});

	describe('FETCH_POSTS_SUCCESS', () => {
		it('should handle FETCH_POSTS_SUCCESS', () => {
			const initialState = List();
			const expectedData = List([{ Post1: 'Lorem' }]);

			expect(
				reducer(initialState, {
					type: types.FETCH_POSTS_SUCCESS,
					response: {
						data: {
							children: [{ Post1: 'Lorem' }],
						},
					},
				}),
			).toEqual(expectedData);
		});
	});

	describe('FETCH_POSTS_FAILURE', () => {
		expect(
			reducer([], {
				type: types.FETCH_POSTS_FAILURE,
			}),
		).toEqual([]);
	});

	describe('REMOVE_ITEM', () => {
		it('should handle REMOVE_ITEM', () => {
			const mockData = [{ Post1: 'Lorem' }, { Post2: 'Ipsum' }, { Post3: 'Dolors' }];
			const expectedData = [{ Post1: 'Lorem' }, { Post3: 'Dolors' }];

			const initialState = List(mockData);
			const index = 1;

			expect(
				reducer(initialState, {
					type: types.REMOVE_ITEM,
					index,
				}),
			).toEqual(List(expectedData));
		});
	});
});
