import React from 'react';
import {
	shallow,
} from 'enzyme';
import renderer from 'react-test-renderer';
import { RedditItem } from './RedditItem';

describe('Reddit Item', () => {
	const mockFunction = jest.fn();
	let wrapper;
	let inst;

	beforeEach(() => {
		wrapper = shallow(
			<RedditItem
				index={0}
				author="Joe Karlsson"
				dispatch={mockFunction}
			>
				When you buy a lottery ticket, you are investing in the dreams of the winner.
			</RedditItem>,
		);
		inst = wrapper.instance();
	});

	describe('rendering', () => {
		describe('initial state', () => {
			it('should match the snapshot', () => {
				const component = renderer.create(
					<RedditItem
						index={0}
						author="Joe Karlsson"
						dispatch={jest.fn()}
					/>,
				);
				const tree = component.toJSON();
				expect(tree).toMatchSnapshot();
			});

			it('is rendered correctly', () => {
				expect(wrapper).toHaveLength(1);
			});

			it('should be selectable by the class `RedditItem`', () => {
				expect(wrapper.is('.RedditItem')).toBe(true);
			});

			it('should mount in the full DOM', () => {
				expect(wrapper.find('.RedditItem').length).toBe(1);
			});

			it('should render to static HTML', () => {
				expect(wrapper.text()).toContain('When you buy a lottery ticket, you are investing in the dreams of the winner.');
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

	describe('callbacks', () => {
		describe('handleDelete', () => {
			it('should dispatch REMOVE_ITEM action', () => {
				const expectedArgs = {
					index: 0,
					type: 'REMOVE_ITEM',
				};

				inst.handleDelete();
				wrapper.update();
				expect(mockFunction.mock.calls.length).toBe(1);
				expect(mockFunction).toHaveBeenCalledWith(expectedArgs);
			});
		});
	});
});
