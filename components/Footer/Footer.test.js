import React from 'react';
import { shallow } from 'enzyme';
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
test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const footer = shallow(
    <Footer />
  );

  console.log('footer: ', footer);
  expect(footer).toHaveLength(1);
});
