import { List } from 'immutable';
import reducer from './redditItemReducer';
import * as types from '../constants/actionTypes';

test('redditItem reducer should return the initial state', () => {
  const initialState = List();
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('redditItem reducer should handle FETCH_POSTS_SUCCESS', () => {
  const initialState = List();
  const expectedData = List([{ Post1: 'Lorem' }]);

  expect(
    reducer(initialState, {
      type: types.FETCH_POSTS_SUCCESS,
      response: '{"data": { "children":[{"Post1":"Lorem"}]}}',
    }),
  ).toEqual(expectedData);
});

test('redditItem reducer should handle REMOVE_ITEM', () => {
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
