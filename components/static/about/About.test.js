import React from 'react';
import About from './About';
import renderer from 'react-test-renderer';

//Snapshot tests
test('About page snapshot matches', () => {
  const component = renderer.create(
    <About />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
