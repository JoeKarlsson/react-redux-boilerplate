import React from 'react';
import renderer from 'react-test-renderer';
import {
  shallow,
} from 'enzyme';
import {
  MemoryRouter,
} from 'react-router-dom';
import { RedditPage } from './RedditPage';

test('RedditPage is rendered correctly', () => {
  const wrapper = shallow(<RedditPage />);
  expect(wrapper).toHaveLength(1);
});

test('RedditPage should be selectable by the class `RedditPage`', ()=> {
  const wrapper = shallow(<RedditPage />);
  expect(wrapper.is('.RedditPage')).toBe(true);
});

test('RedditPage should mount in the full DOM', () => {
  const wrapper = shallow(<RedditPage />);
  expect(wrapper.find('.RedditPage').length).toBe(1);
});

test('RedditPage should render to static HTML', () => {
  const wrapper = shallow(<RedditPage />);
  expect(wrapper.text()).toContain('Reddit');
});
