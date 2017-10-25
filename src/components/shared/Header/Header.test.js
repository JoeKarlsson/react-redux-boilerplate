import React from 'react';
import {
	shallow,
} from 'enzyme';
import renderer from 'react-test-renderer';
import {
	MemoryRouter,
} from 'react-router-dom';
import Header from './Header';

describe('Footer', () => {
	let wrapper;
	let inst;

	beforeEach(() => {
		wrapper = shallow(
			<MemoryRouter>
				<Header />
			</MemoryRouter>,
		);
		inst = wrapper.instance();
	});

	describe('rendering', () => {
		describe('initial state', () => {
			it('is rendered', () => {
				const component = renderer.create(
					<MemoryRouter>
						<Header />
					</MemoryRouter>,
				);
				const tree = component.toJSON();
				expect(tree).toMatchSnapshot();
			});

			it('is rendered correctly', () => {
				expect(wrapper).toHaveLength(1);
			});

			it('should be selectable by the class `header`', () => {
				expect(wrapper.dive().dive().is('.header')).toBe(true);
			});

			it('should mount in the full DOM', () => {
				expect(wrapper.dive().dive().find('.header').length).toBe(1);
			});

			it('should render to static HTML', () => {
				expect(wrapper.dive().dive().text()).toContain('React Reddit');
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
