/**
 * @format
 */
import React from 'react';
import {View} from 'react-native';
import {ErrorBoundary} from '@components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
it('renders correctly', () => {
  const instance = renderer.create(
    <ErrorBoundary>
      <View />
    </ErrorBoundary>,
  );
  // instance.root
  expect(instance.toJSON()).toMatchSnapshot();
});

it('renders errors', () => {
  const instance = shallow(
    <ErrorBoundary>
      <View />
    </ErrorBoundary>,
  );
  instance.setState({hasError: true});
  expect(instance.childAt(0).text()).toBe('Error Fallback');
});
