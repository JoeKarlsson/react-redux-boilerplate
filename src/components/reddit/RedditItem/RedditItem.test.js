import React from 'react';
import renderer from 'react-test-renderer';
import { RedditItem } from './RedditItem';

test('RedditItem page snapshot matches', () => {
	const component = renderer.create(
		<RedditItem index={0} author="Joe Karlsson" />,
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
