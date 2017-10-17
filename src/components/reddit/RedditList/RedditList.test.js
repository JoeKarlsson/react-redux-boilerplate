import React from 'react';
import renderer from 'react-test-renderer';
import {
	MemoryRouter,
} from 'react-router-dom';
import RedditList from './RedditList';

test('RedditList page snapshot matches', () => {
	const component = renderer.create(
		<MemoryRouter><RedditList /></MemoryRouter>,
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
