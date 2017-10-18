import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import NoMatch from './NoMatch';

describe('NoMatch Page', () => {
	let wrapper;
	let inst;

	beforeEach(() => {
		wrapper = shallow(
			<NoMatch />,
		);
		inst = wrapper.instance();
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
			it('should have correct inital state', () => {
				const initialState = inst.state;
				const expectedIntialState = null;
				expect(initialState).toBe(expectedIntialState);
			});
			it('should not have any inital props', () => {
				const initialProps = inst.props;
				const expectedProps = {};
				expect(initialProps).toEqual(expectedProps);
			});
		});
	});
});
