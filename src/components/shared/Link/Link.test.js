import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

test('Link changes the class when hovered', () => {
	const component = renderer.create(
		<Link page="http://www.instagram.com">Instagram</Link>,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	// manually trigger the callback
	tree.props.onMouseEnter();
	// re-rendering
	tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	// manually trigger the callback
	tree.props.onMouseLeave();
	// re-rendering
	tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
