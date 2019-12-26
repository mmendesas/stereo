import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Card } from '.';

describe('Components | Card', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Card>Card</Card>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
