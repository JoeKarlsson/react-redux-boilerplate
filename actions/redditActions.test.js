// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import nock from 'nock';
import * as actions from './redditActions';
import * as types from '../constants/actionTypes';

test('removeItem create an action to remove a post', () => {
  const index = 0
  const expectedAction = {
    type: types.REMOVE_ITEM,
    index,
  };
  expect(actions.removeItem(index)).toEqual(expectedAction);
})

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// test('async actions creates FETCH_POSTS_SUCCESS when fetching todos has been done', () => {
//   afterEach(() => {
//     nock.cleanAll();
//   });
//
//   nock('https://www.reddit.com/')
//     .get('/r/showerthoughts.json')
//     .reply(200, { body: { todos: ['do something'] } });
//
//   const expectedActions = [
//     { type: types.FETCH_POSTS_REQUEST },
//     { type: types.FETCH_POSTS_SUCCESS,
//       body: {
//         todos: ['do something'],
//       },
//     },
//   ];
//
//   console.log(actions);
//   const store = mockStore({ todos: [] });
//
//   return store.dispatch(actions.fetchPosts())
//     .then(() => {
//       // return of async actions
//       console.log(store.getActions())
//       expect(store.getActions()).toEqual(expectedActions);
//     });
// });
