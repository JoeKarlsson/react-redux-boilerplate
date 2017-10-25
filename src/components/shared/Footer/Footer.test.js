import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('Footer', () => {
	let wrapper;
	let inst;

	beforeEach(() => {
		wrapper = shallow(
			<Footer />,
		);
		inst = wrapper.instance();
	});

	describe('rendering', () => {
		describe('initial state', () => {
			it('is rendered', () => {
				const component = renderer.create(
					<footer />,
				);
				const tree = component.toJSON();
				expect(tree).toMatchSnapshot();
			});

			it('is rendered correctly', () => {
				expect(wrapper).toHaveLength(1);
			});

			it('should render without throwing an error', () => {
				expect(wrapper.contains(
					<div className="footer">
						<h2>Footer</h2>
					</div>,
				)).toEqual(true);
			});

			it('should be selectable by the class `footer`', () => {
				expect(wrapper.is('.footer')).toBe(true);
			});

			it('should mount in the full DOM', () => {
				expect(wrapper.find('.footer').length).toBe(1);
			});

			it('should render to static HTML', () => {
				expect(wrapper.text()).toEqual('Footer');
			});

			it('should have correct inital state', () => {
				const initialState = inst.state;
				const expectedIntialState = null;
				expect(initialState).toBe(expectedIntialState);
			});

			it('should not have any inital props', () => {
				const initialProps = inst.props;
				const expectedProps = {};
				expect(initialProps).toMatchObject(expectedProps);
			});
		});
	});
});
