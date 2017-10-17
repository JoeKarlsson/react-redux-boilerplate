import React from 'react';
import renderer from 'react-test-renderer';
import About from './About';

test('About page snapshot matches', () => {
	const component = renderer.create(
		<About />,
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
