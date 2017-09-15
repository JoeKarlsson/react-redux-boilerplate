import React from 'react';
import {
  shallow,
} from 'enzyme';
import {
  MemoryRouter,
} from 'react-router-dom';
import { PrimaryLayout } from './PrimaryLayout';

test('PrimaryLayout is rendered correctly', () => {
  const wrapper = shallow(
    <MemoryRouter>
      <PrimaryLayout />
    </MemoryRouter>
  );
  expect(wrapper).toHaveLength(1);
});

test('PrimaryLayout should be selectable by the class `PrimaryLayout`', () => {
  const wrapper = shallow(<MemoryRouter><PrimaryLayout /></MemoryRouter>);
  expect(wrapper.dive().dive().is('.PrimaryLayout')).toBe(true);
});

test('PrimaryLayout should mount in the full DOM', () => {
  const wrapper = shallow(<MemoryRouter><PrimaryLayout /></MemoryRouter>);
  expect(wrapper.dive().dive().find('.PrimaryLayout').length).toBe(1);
});

test('PrimaryLayout should render to static HTML', () => {
  const wrapper = shallow(<MemoryRouter><PrimaryLayout /></MemoryRouter>);
  expect(wrapper.dive().dive().text()).toContain('<Header /><Switch /><Footer />');
});
