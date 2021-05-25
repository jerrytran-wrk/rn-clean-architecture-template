/**
 * @format
 */
import React from 'react';
import {EmptyListView} from '@components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const instance = renderer.create(<EmptyListView />);
  expect(instance.toJSON()).toMatchSnapshot();
});
