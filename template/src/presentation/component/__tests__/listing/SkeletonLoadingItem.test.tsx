/**
 * @format
 */
import React from 'react';
import {SkeletonLoadingItem} from '@components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {setupTimeTravel} from '@mocks';

beforeEach(setupTimeTravel);

it('renders correctly', () => {
  const instance = renderer.create(<SkeletonLoadingItem />);
  expect(instance.toJSON()).toMatchSnapshot();
});
