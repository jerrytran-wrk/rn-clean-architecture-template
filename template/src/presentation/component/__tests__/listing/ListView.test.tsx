/**
 * @format
 */
import React from 'react';
import {ListView} from '@components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const instance = renderer.create(<ListView />);
  expect(instance.toJSON()).toMatchSnapshot();
});
