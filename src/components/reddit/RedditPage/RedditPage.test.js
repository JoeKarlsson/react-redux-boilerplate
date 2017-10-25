import React from 'react';
import renderer from 'react-test-renderer';
import {
	shallow,
} from 'enzyme';
import { RedditPage } from './RedditPage';

describe('RedditPage', () => {

	describe('rendering', () => {
		let wrapper;
		let inst;

		beforeEach(() => {
			wrapper = shallow(
				<RedditPage dispatch={jest.fn()} />,
			);
			inst = wrapper.instance();
		});

		describe('initial state', () => {
			it('should match the snapshot', () => {
				const component = renderer.create(
					<RedditPage dispatch={jest.fn()} />,
				);
				const tree = component.toJSON();
				expect(tree).toMatchSnapshot();
			});

			it('is rendered correctly', () => {
				expect(wrapper).toHaveLength(1);
			});

			it('should be selectable by the class `RedditPage`', () => {
				expect(wrapper.is('.RedditPage')).toBe(true);
			});

			it('should mount in the full DOM', () => {
				expect(wrapper.find('.RedditPage').length).toBe(1);
			});

			it('should render to static HTML', () => {
				expect(wrapper.text()).toContain('Reddit');
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
