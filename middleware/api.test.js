import nock from 'nock';
import apiMiddleware, { CALL_API } from './api';
import * as types from '../constants/actionTypes';

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

test('api redux middleware calls the function', () => {
  nock('/reddit\.com/').log(console.log)
    .get('/r/showerthoughts.json')
    .reply(200, '{ "data": { "children": [{ Post1: "Lorem Ipsum" }] } }');

  const { invoke } = create();
  const fn = jest.fn();
  // const fn = jest.fn(CALL_API);
  const action = {
    [CALL_API]: {
      endpoint: 'showerthoughts.json',
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_FAILURE,
      ],
    },
  };
  invoke(action);
  expect(fn).toHaveBeenCalled();
});

test('passes dispatch and getState', () => {
  const { store, invoke } = create();
  invoke((dispatch, getState) => {
    dispatch('TEST DISPATCH');
    getState();
  });
  expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH');
  expect(store.getState).toHaveBeenCalled();
});

// import { CALL_API } from '../middleware/api';
// import * as types from '../constants/actionTypes';
//
// export const fetchPosts = () => {
//   const data = {
//     method: 'GET',
//   };
//   return {
//     [CALL_API]: {
//       endpoint: 'showerthoughts.json',
//       types: [
//         types.FETCH_POSTS_REQUEST,
//         types.FETCH_POSTS_SUCCESS,
//         types.FETCH_POSTS_FAILURE,
//       ],
//       data,
//     },
//   };
// };
