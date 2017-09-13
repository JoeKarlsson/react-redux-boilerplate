import { CALL_API } from '../middleware/api';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const fetchPosts = () => {
  const data = {
    method: 'GET',
  };
  return {
    [CALL_API]: {
      endpoint: 'showerthoughts.json',
      types: [
        FETCH_POSTS_REQUEST,
        FETCH_POSTS_SUCCESS,
        FETCH_POSTS_FAILURE
      ],
      data,
    }
  }
};

export const removeItem = (index) => {
  return {
    type: REMOVE_ITEM,
    index,
  }
};
