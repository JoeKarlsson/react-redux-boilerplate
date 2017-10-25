import { List } from 'immutable';
import * as types from '../constants/actionTypes';

const initialState = List();

const redditItemReducer = (state = initialState, action) => {

	const newState = state;

	switch (action.type) {

	case types.FETCH_POSTS_REQUEST:
		return state;

	case types.FETCH_POSTS_SUCCESS: {
		const parsedPosts = action.response.data.children;
		return List(parsedPosts);
	}

	case types.FETCH_POSTS_FAILURE:
		return state;

	case types.REMOVE_ITEM:
		return state.delete(action.index);

	default:
		return newState;
	}
};

export default redditItemReducer;
