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

