import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {
	shallow,
	configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import fetchMock from 'fetch-mock';
import RedditList from './RedditList';
import api from '../../../middleware/api';

configure({ adapter: new Adapter() });

describe('Reddit List', () => {
	describe('rendering', () => {
		const redditData = [
			{
				data: {
					title: 'Humans are such apex predators that we think getting scared like prey is fun and entertaining.',
					id: '78dsfs',
					author: 'old_and_spicy',
				},
			}, {
				data: {
					title: 'The milky way galaxy could be the only galaxy with milkyway bars in it"',
					id: '78ezi9',
					author: 'TheGodOfDucks',
				},
			},
		];
		let wrapper;
		let inst;

		beforeEach(() => {
			wrapper = shallow(
				<MemoryRouter>
					<RedditList redditData={redditData} />
				</MemoryRouter>,
			);
			inst = wrapper.instance();
		});

		afterEach(() => {
			fetchMock.reset();
			fetchMock.restore();
		});

		describe('initial state', () => {
			it('should match the snapshot', () => {
				const middlewares = [thunk, api];
				const mockStore = configureMockStore(middlewares);

				const initialState = {
					redditItemReducer: {
						toJS: jest.fn(),
					},
				};
				const store = mockStore(initialState);

				const testApiResponse = {
					data: {
						children: [
							{
								data: {
									title: 'Humans are such apex predators that we think getting scared like prey is fun and entertaining.',
									id: '78dsfs',
									author: 'old_and_spicy',
								},
							}, {
								data: {
									title: 'The milky way galaxy could be the only galaxy with milkyway bars in it"',
									id: '78ezi9',
									author: 'TheGodOfDucks',
								},
							},
						],
					},
				};

				fetchMock
					.getOnce('https://www.reddit.com/r/showerthoughts.json', {
						body: testApiResponse,
						headers: { 'content-type': 'application/json' },
					});

				const component = renderer.create(
					<Provider store={store}>
						<MemoryRouter>
							<RedditList redditData={redditData} />
						</MemoryRouter>
					</Provider>,
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
				const expectedIntialState = {};
				expect(initialState).toMatchObject(expectedIntialState);
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
