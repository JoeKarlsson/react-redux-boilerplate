import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import { PrimaryLayout } from './PrimaryLayout';
import api from '../../../middleware/api';

describe('PrimaryLayout Page', () => {
	let wrapper;
	let inst;

	beforeEach(() => {
		wrapper = shallow(
			<MemoryRouter>
				<PrimaryLayout />
			</MemoryRouter>,
		);
		inst = wrapper.instance();
	});

	afterEach(() => {
		fetchMock.reset();
		fetchMock.restore();
	});

	describe('rendering', () => {
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
						body: { ...testApiResponse },
						headers: { 'content-type': 'application/json' },
					});

				const component = renderer.create(
					<Provider store={store}>
						<MemoryRouter>
							<PrimaryLayout />
						</MemoryRouter>
					</Provider>,
				);
				const tree = component.toJSON();
				expect(tree).toMatchSnapshot();
			});

			it('is rendered correctly', () => {
				expect(wrapper).toHaveLength(1);
			});

			it('should render without throwing an error', () => {
				expect(wrapper.text()).toEqual('<Router />');
			});

			it('should be selectable by the class `PrimaryLayout`', () => {
				expect(wrapper.dive().dive().is('.PrimaryLayout')).toBe(true);
			});

			it('should mount in the full DOM', () => {
				expect(wrapper.dive().dive().find('.PrimaryLayout').length).toBe(1);
			});

			it('should render to static HTML', () => {
				expect(wrapper.dive().dive().text()).toContain('<Header /><Switch /><Footer />');
			});

			it('should have correct inital state', () => {
				const initialState = inst.state;
				const expectedIntialState = null;
				expect(initialState).toBe(expectedIntialState);
			});

			it('should not have any inital props', () => {
				const initialProps = inst.props;
				const expectedProps = {
					children: <PrimaryLayout />,
				};
				expect(initialProps).toEqual(expectedProps);
			});
		});
	});
});
