 import React from 'react';
import {
  shallow,
} from 'enzyme';
import renderer from 'react-test-renderer';
import {
  MemoryRouter,
  Link,
} from 'react-router-dom';
import Header from './Header';

test('Header is rendered', () => {
  const component = renderer.create(
    <MemoryRouter><Header /></MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Header is rendered correctly', () => {
  const wrapper = shallow(<MemoryRouter><Header /></MemoryRouter>);
  expect(wrapper).toHaveLength(1);
});

test('Header should render without throwing an error', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.contains(<div className="header"><h1>React Reddit</h1><ul role="nav"><li><Link to="/">Home</Link></li><li><Link to="/about">About</Link></li></ul></div>)).toEqual(true);
});

test('Header should be selectable by the class `Header`', ()=> {
  const wrapper = shallow(<MemoryRouter><Header /></MemoryRouter>);
  expect(wrapper.dive().dive().is('.header')).toBe(true);
});

test('Header should mount in the full DOM', () => {
  const wrapper = shallow(<MemoryRouter><Header /></MemoryRouter>);
  expect(wrapper.dive().dive().find('.header').length).toBe(1);
});

test('Header should render to static HTML', () => {
  const wrapper = shallow(<MemoryRouter><Header /></MemoryRouter>);
  expect(wrapper.dive().dive().text()).toContain('React Reddit');
});
