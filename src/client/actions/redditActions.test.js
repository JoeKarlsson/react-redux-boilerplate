import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import api, { CALL_API } from '../middleware/api';
import * as actions from './redditActions';
import * as types from '../constants/actionTypes';

const middlewares = [thunk, api];
const mockStore = configureMockStore(middlewares);

describe('Reddit Actions', () => {
	afterEach(() => {
		fetchMock.reset();
		fetchMock.restore();
	});

	describe('fetchPosts', () => {
		it('should return thunk object', () => {
			const data = {
				method: 'GET',
			};

			const expectedAction = {
				[CALL_API]: {
					endpoint: 'showerthoughts.json',
					types: [
						types.FETCH_POSTS_REQUEST,
						types.FETCH_POSTS_SUCCESS,
						types.FETCH_POSTS_FAILURE,
					],
					data,
				},
			};

			expect(actions.fetchPosts()).toMatchObject(expectedAction);
		});

		describe('async actions', () => {

			it('creates FETCH_POSTS_SUCCESS when fetching posts has been done', () => {

				const testApiResponse = {
					data: {
						children: [
							{
								data: {
									title: 'Humans are such apex predators that we think getting scared like prey is fun and entertaining.',
									id: '78dsfs',
									author: 'old_and_spicy',
								},
							}, {
								data: {
									title: 'The milky way galaxy could be the only galaxy with milkyway bars in it"',
									id: '78ezi9',
									author: 'TheGodOfDucks',
								},
							},
						],
					},
				};

				fetchMock
					.getOnce('https://www.reddit.com/r/showerthoughts.json', {
						body: testApiResponse,
						headers: { 'content-type': 'application/json' },
					});

				const expectedActions = [
					{
						data: { method: 'GET' },
						response: testApiResponse,
						type: types.FETCH_POSTS_SUCCESS,
					},
				];

				const store = mockStore({});

				return store.dispatch(actions.fetchPosts()).then(() => {
					// return of async actions
					expect(store.getActions()).toEqual(expectedActions);
				});
			});

			it('creates FETCH_POSTS_FAILURE when fetching posts has encountered an error', () => {
				fetchMock
					.getOnce('https://www.reddit.com/r/showerthoughts.json', {
						headers: { 'content-type': 'application/text' },
					});

				const expectedActions = [
					{
						error: 'FetchError: invalid json response body at https://www.reddit.com/r/showerthoughts.json reason: Unexpected end of JSON input',
						type: types.FETCH_POSTS_FAILURE,
					},
				];

				const store = mockStore({});

				return store.dispatch(actions.fetchPosts()).then(() => {
					// return of async actions
					expect(store.getActions()).toEqual(expectedActions);
				});
			});
		});
	});

	describe('removeItem', () => {
		it('should create an action to remove a post', () => {
			const index = 0;
			const expectedAction = {
				type: types.REMOVE_ITEM,
				index,
			};
			expect(actions.removeItem(index)).toEqual(expectedAction);
		});
	});
});
