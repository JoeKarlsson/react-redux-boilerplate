import React from 'react';
import {
	shallow,
	configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('Footer', () => {
	let wrapper;

	global.requestAnimationFrame = (callback) => {
		setTimeout(callback, 0);
	};

	beforeEach(() => {
		wrapper = shallow(<Footer />);
	});

	describe('rendering', () => {
		describe('initial state', () => {
			it('is rendered', () => {
				const component = renderer.create(<footer />);
				const tree = component.toJSON();
				expect(tree).toMatchSnapshot();
			});

			it('is rendered correctly', () => {
				expect(wrapper).toHaveLength(1);
			});

			it('should render without throwing an error', () => {
				expect(wrapper.contains(
					<div className="footer">
						<h2>Footer</h2>
					</div>,
				)).toEqual(true);
			});

			it('should be selectable by the class `footer`', () => {
				expect(wrapper.is('.footer')).toBe(true);
			});

			it('should mount in the full DOM', () => {
				expect(wrapper.find('.footer').length).toBe(1);
			});

			it('should render to static HTML', () => {
				expect(wrapper.text()).toEqual('Footer');
			});

			it('should have correct inital instance', () => {
				const initialInstance = wrapper.instance();
				const expectedInstance = null;
				expect(initialInstance).toBe(expectedInstance);
			});
		});
	});
});
