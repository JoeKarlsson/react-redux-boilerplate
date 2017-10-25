import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { PrimaryLayout } from './PrimaryLayout';

// const setup = () => {
// 	const props = {};
//
// 	const enzymeWrapper = mount(
// 		<MemoryRouter>
// 			<PrimaryLayout {...props} />
// 		</MemoryRouter>,
// 	);
//
// 	return {
// 		props,
// 		enzymeWrapper,
// 	};
// };

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

	describe('rendering', () => {
		describe('initial state', () => {
			it('should match the snapshot', () => {
				const middlewares = [];
				const mockStore = configureMockStore(middlewares);

				const initialState = {
					redditItemReducer: {
						toJS: jest.fn(),
					},
				};
				const store = mockStore(initialState);

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
