import React from 'react';
import Footer from './Footer';
import renderer from 'react-test-renderer';

test('Footer is rendered', () => {
  const component = renderer.create(
    <footer />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
