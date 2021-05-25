/**
 * @format
 */
import React from 'react';
import {Text, Image, TextInputProps} from 'react-native';

import {TextField} from '@components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Test TextView', () => {
  it('render correctly', () => {
    const instance = renderer.create(<TextField />);
    expect(instance.toJSON()).toMatchSnapshot();
  });
  it('Test render prefix', () => {
    const instance = renderer.create(<TextField />);
    expect(instance.root.findAllByType(Image)).toHaveLength(0);

    // test render Prefix
    instance.update(<TextField prefix={<Text children="test" />} />);
    expect(instance.root.findByProps({children: 'test'})).toBeDefined();
    expect(instance.root.findAllByType(Image)).toHaveLength(0);

    // test render Prefix
    const prefixIcon = 1;
    instance.update(<TextField prefixIcon={prefixIcon} />);
    expect(instance.root.findByType(Image)?.props?.source).toEqual(prefixIcon);
  });

  it('Test render suffix', () => {
    const instance = renderer.create(<TextField />);
    expect(instance.root.findAllByType(Image)).toHaveLength(0);

    // test render Prefix
    instance.update(<TextField suffix={<Text children="test" />} />);
    expect(instance.root.findByProps({children: 'test'})).toBeDefined();
    expect(instance.root.findAllByType(Image)).toHaveLength(0);

    // test render Prefix
    const prefixIcon = 1;
    instance.update(<TextField suffixIcon={prefixIcon} />);
    expect(instance.root.findByType(Image)?.props?.source).toEqual(prefixIcon);
  });

  it('Test render TextInput with props', () => {
    const inputProps: TextInputProps = {value: 'test'};
    const instance = renderer.create(<TextField inputProps={inputProps} />);
    expect(instance.root.findByProps(inputProps)).toBeDefined();
  });
});
