/**
 * @format
 */
import React from 'react';
import {Text, Image} from 'react-native';

import {IconLabel} from '@components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('render correctly', () => {
  const instance = renderer.create(<IconLabel />);
  expect(instance.toJSON()).toMatchSnapshot();
});
it('render prefix', () => {
  const instance = renderer.create(<IconLabel text="test" />);
  const textView = instance.root.findByType(Text);
  expect(textView.props.children).toBe('test');
  expect(instance.root.findAllByType(Image)).toHaveLength(0);

  // test render Prefix
  instance.update(<IconLabel prefix={<Text children="test" />} />);
  expect(instance.root.findByProps({children: 'test'})).toBeDefined();
  expect(instance.root.findAllByType(Image)).toHaveLength(0);

  // test render Prefix
  const prefixIcon = 1;
  instance.update(<IconLabel prefixIcon={prefixIcon} />);
  expect(instance.root.findByType(Image)?.props?.source).toEqual(prefixIcon);
});
