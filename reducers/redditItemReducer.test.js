import { List } from 'immutable';
import reducer from './redditItemReducer'
import * as types from '../constants/actionTypes'

test('redditItem reducer should return the initial state', () => {
  const initialState = List();
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('redditItem reducer should handle FETCH_POSTS_SUCCESS', () => {
  const initialState = List();
  expect(
    reducer(initialState, {
      type: types.FETCH_POSTS_SUCCESS,
      response: '{"data": { "children":[{"Post1":"Lorem"}]}}',
    }),
  ).toEqual(List([{ Post1: 'Lorem' }]));

  // expect(
  //   reducer(
  //     [
  //       {
  //         text: 'Use Redux',
  //         completed: false,
  //         id: 0
  //       }
  //     ],
  //     {
  //       type: types.ADD_TODO,
  //       text: 'Run the tests'
  //     }
  //   )
  // ).toEqual([
  //   {
  //     text: 'Run the tests',
  //     completed: false,
  //     id: 1
  //   },
  //   {
  //     text: 'Use Redux',
  //     completed: false,
  //     id: 0
  //   }
  // ])
})
