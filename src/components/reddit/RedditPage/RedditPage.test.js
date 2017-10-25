import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ConnectedRedditPage, { RedditPage } from './RedditPage';

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

	describe('Connected Component', () => {
		it('should render a connected component', () => {
			const middlewares = [];
			const mockStore = configureMockStore(middlewares);
			const initialState = { redditItemReducer: 'REDDIT_DATA' };
			const store = mockStore(initialState);

			const connectedWrapper = shallow(
				<Provider store={store}>
					<ConnectedRedditPage />
				</Provider>,
			);
			const connectedInst = connectedWrapper.instance();
			expect(connectedWrapper.find(ConnectedRedditPage).length).toEqual(1);
			const reduxStore = connectedInst.props.store.getState();
			expect(reduxStore.redditItemReducer).toBe('REDDIT_DATA');
		});
	});
});
