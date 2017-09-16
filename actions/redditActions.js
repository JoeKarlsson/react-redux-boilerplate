import { CALL_API } from '../middleware/api';
import * as types from '../constants/actionTypes';

export const fetchPosts = () => {
  const data = {
    method: 'GET',
  };
  return {
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
};

export const removeItem = (index) => {
  return {
    type: types.REMOVE_ITEM,
    index,
  };
};
