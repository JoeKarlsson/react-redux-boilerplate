import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import RedditList from './RedditList';

describe('Reddit List', () => {
	describe('rendering', () => {
		let wrapper;
		let inst;

		beforeEach(() => {
			wrapper = shallow(
				<MemoryRouter>
					<RedditList />
				</MemoryRouter>,
			);
			inst = wrapper.instance();
		});

		describe('initial state', () => {
			it('should match the snapshot', () => {
				const component = renderer.create(
					<MemoryRouter>
						<RedditList />
					</MemoryRouter>,
				);
				const tree = component.toJSON();
				expect(tree).toMatchSnapshot();
			});

			it('is rendered correctly', () => {
				expect(wrapper).toHaveLength(1);
			});

			it('should be selectable by the class `RedditList`', () => {
				expect(wrapper.dive().dive().is('.RedditList')).toBe(true);
			});

			it('should mount in the full DOM', () => {
				expect(wrapper.dive().dive().find('.RedditList').length).toBe(1);
			});

			it('should render to static HTML', () => {
				expect(wrapper.dive().dive().text()).toContain('Reddit List');
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

	describe('Static Methods', () => {
		describe('redditItemNodeBuilder', () => {
			const middlewares = [];
			const mockStore = configureMockStore(middlewares);
			const store = mockStore({});

			const index = 0;
			const redditDataItem = {
				data: {
					id: 1234,
					author: 'Joe Karlsson',
					title: 'Buying an airline ticket is like paying shipping and handling for yourself.',
				},
			};

			const result = RedditList.redditItemNodeBuilder(redditDataItem, index);

			const resultWrapper = shallow(
				<Provider store={store}>
					{ result }
				</Provider>,
			);

			const nodeProps = resultWrapper.instance().props.children.props;
			const expectedProps = {
				id: 1234,
				author: 'Joe Karlsson',
				children: 'Buying an airline ticket is like paying shipping and handling for yourself.',
				index: 0,
			};
			expect(nodeProps).toMatchObject(expectedProps);
		});
	});
});
