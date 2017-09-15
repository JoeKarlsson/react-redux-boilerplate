import React from 'react';
import renderer from 'react-test-renderer';
import NoMatch from './NoMatch';

test('NoMatch page snapshot matches', () => {
  const component = renderer.create(
    <NoMatch />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
