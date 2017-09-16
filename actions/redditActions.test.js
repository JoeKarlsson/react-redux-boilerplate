import * as actions from './redditActions';
import * as types from '../constants/actionTypes';

describe('Reddit actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: types.ADD_TODO,
      text,
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
});

test('Reddit actions should create an action to add reddit items', () => {
  const component = renderer.create(
    <RedditItem index={0} author='Joe Karlsson'/>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
