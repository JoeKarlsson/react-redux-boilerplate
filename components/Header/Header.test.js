import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from './Header';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

//Snapshot tests
test('Header is rendered', () => {
  const component = renderer.create(
    <MemoryRouter><Header /></MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// DOM Testing
test('Header is rendered correctly', () => {
  const wrapper = shallow(<MemoryRouter><Header /></MemoryRouter>);

  expect(wrapper).toHaveLength(1);
});
