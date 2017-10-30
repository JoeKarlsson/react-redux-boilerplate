import React from 'react';
import {
	shallow,
	configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import {
	MemoryRouter,
} from 'react-router-dom';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<MemoryRouter>
				<Header />
			</MemoryRouter>,
		);
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
				expect(wrapper.dive().dive().is('.header_bar')).toBe(true);
			});

			it('should mount in the full DOM', () => {
				expect(wrapper.dive().dive().find('.header_bar').length).toBe(1);
			});

			it('should have correct inital instance', () => {
				const initialState = wrapper.dive().dive().instance();
				const expectedIntialState = null;
				expect(initialState).toBe(expectedIntialState);
			});
		});
	});
});
