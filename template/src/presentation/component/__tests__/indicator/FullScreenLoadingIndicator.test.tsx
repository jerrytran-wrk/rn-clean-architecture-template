/**
 * @format
 */
import React from 'react';
import {Modal} from 'react-native';

import {
  FullScreenLoadingIndicator,
  FullScreenLoadingIndicatorProps,
} from '@components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('test visible', () => {
  const props: FullScreenLoadingIndicatorProps = {
    visible: true,
  };
  const instance = renderer.create(<FullScreenLoadingIndicator {...props} />);
  expect(instance.root.findByType(Modal).props?.visible).toBeTruthy();
});

it('render correctly', () => {
  const props: FullScreenLoadingIndicatorProps = {
    visible: true,
  };
  const instance = renderer.create(<FullScreenLoadingIndicator {...props} />);
  expect(instance.toJSON()).toMatchSnapshot();
});
