import React from 'react';
import renderer from 'react-test-renderer';
import {
	shallow,
	configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from './About';

configure({ adapter: new Adapter() });

describe('About Page', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<About />,
		);
	});

	describe('rendering', () => {
		describe('initial state', () => {
			it('match the snapshot', () => {
				const component = renderer.create(
					<About />,
				);
				const tree = component.toJSON();
				expect(tree).toMatchSnapshot();
			});
			it('is rendered correctly', () => {
				expect(wrapper).toHaveLength(1);
			});
			it('should render without throwing an error', () => {
				expect(wrapper.text()).toEqual('About');
			});
			it('should be selectable by the class `ChatDrawer`', () => {
				expect(wrapper.is('.About')).toBe(true);
			});
			it('should mount in the full DOM', () => {
				expect(wrapper.find('.About').length).toBe(1);
			});
			it('should have correct inital instance', () => {
				const initialInstance = wrapper.instance();
				const expectedInstance = null;
				expect(initialInstance).toBe(expectedInstance);
			});
		});
	});
});
