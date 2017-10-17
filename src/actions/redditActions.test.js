import * as actions from './redditActions';
import * as types from '../constants/actionTypes';

test('removeItem create an action to remove a post', () => {
	const index = 0;
	const expectedAction = {
		type: types.REMOVE_ITEM,
		index,
	};
	expect(actions.removeItem(index)).toEqual(expectedAction);
});
