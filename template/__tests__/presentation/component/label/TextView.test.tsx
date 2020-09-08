/**
 * @format
 */
import React from 'react';
import {Text} from 'react-native';
import {TextView} from '@components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const instance = renderer.create(<TextView />);
  expect(instance.toJSON()).toMatchSnapshot();
});

it('renders with text', () => {
  const instance = renderer.create(<TextView text="test" />);
  const textView = instance.root.findByType(Text);
  expect(textView.props.children).toBe('test');
});
