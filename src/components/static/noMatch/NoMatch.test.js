import React from 'react';
import renderer from 'react-test-renderer';
import {
	shallow,
	configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoMatch from './NoMatch';

configure({ adapter: new Adapter() });

describe('NoMatch Page', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<NoMatch />,
		);
	});

	describe('rendering', () => {
		describe('initial state', () => {
			it('match the snapshot', () => {
				const component = renderer.create(
					<NoMatch />,
				);
				const tree = component.toJSON();
				expect(tree).toMatchSnapshot();
			});
			it('is rendered correctly', () => {
				expect(wrapper).toHaveLength(1);
			});
			it('should render without throwing an error', () => {
				expect(wrapper.text()).toEqual('No Page Found');
			});
			it('should be selectable by the class `ChatDrawer`', () => {
				expect(wrapper.is('.NoMatch')).toBe(true);
			});
			it('should mount in the full DOM', () => {
				expect(wrapper.find('.NoMatch').length).toBe(1);
			});
			it('should have correct inital instance', () => {
				const initialInstance = wrapper.instance();
				const expectedInstance = null;
				expect(initialInstance).toBe(expectedInstance);
			});
		});
	});
});
