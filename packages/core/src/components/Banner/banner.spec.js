import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Banner } from '.';

describe('Component | Banner', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Banner>Banner</Banner>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
