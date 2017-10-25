import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Link from './Link';

describe('Footer', () => {
	let wrapper;
	let inst;

	beforeEach(() => {
		wrapper = shallow(
			<Link page="http://www.instagram.com">
				Instagram
			</Link>,
		);
		inst = wrapper.instance();
	});

	describe('rendering', () => {
		describe('initial state', () => {
			it('is rendered', () => {
				const component = renderer.create(
					<Link page="http://www.instagram.com">
						Instagram
					</Link>,
				);
				const tree = component.toJSON();
				expect(tree).toMatchSnapshot();
			});

			it('is rendered correctly', () => {
				expect(wrapper).toHaveLength(1);
			});

			it('should have correct inital state', () => {
				const initialState = inst.state;
				const expectedIntialState = {
					class: 'normal',
				};
				expect(initialState).toMatchObject(expectedIntialState);
			});

			it('should not have any inital props', () => {
				const initialProps = inst.props;
				const expectedProps = {};
				expect(initialProps).toMatchObject(expectedProps);
			});
		});

		describe('Mouse Over', () => {
			it('should change the class when hovered', () => {
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
		});
	});
});
