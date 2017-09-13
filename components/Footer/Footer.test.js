import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Footer from './Footer';
import renderer from 'react-test-renderer';

//Snapshot tests
test('Footer is rendered', () => {
  const component = renderer.create(
    <footer />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// DOM Testing
test('Footer is rendered correctly', () => {
  const wrapper = shallow( <Footer /> );

  expect(wrapper).toHaveLength(1);
});

test('Footer should render without throwing an error', () => {
  const wrapper = shallow( <Footer /> );
  console.log('wrapper.debug(): ', wrapper.debug());

  expect(wrapper.contains(<div className='footer'><h2>Footer</h2></div>)).toEqual(true);
});

test('Footer should be selectable by the class `footer`', ()=> {
  const wrapper = shallow( <Footer /> );

  expect(wrapper.is('.footer')).toBe(true);
});


test('Footer should mount in the full DOM', () => {
  const wrapper = shallow( <Footer /> );

  expect(wrapper.find('.footer').length).toBe(1);
});

test('Footer should render to static HTML', () => {
  const wrapper = shallow( <Footer /> );

  expect(wrapper.text()).toEqual('Footer');
});
