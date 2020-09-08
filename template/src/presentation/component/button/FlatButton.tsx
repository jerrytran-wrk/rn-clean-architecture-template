import React from 'react';
import {StyleSheet, Text, TextProps, StyleProp, ViewStyle} from 'react-native';

import Ripple from 'react-native-material-ripple';

export interface FlatButtonProps extends TextProps {
  containerStyle?: StyleProp<ViewStyle>;
  title?: string;
  onPress?: () => void;
}

const _FlatButton: React.FC<FlatButtonProps> = (props) => {
  const {title, onPress} = props;
  return (
    <Ripple
      onPress={onPress}
      style={StyleSheet.flatten([_styles.container, props.containerStyle])}>
      <Text style={_styles.title}>{title}</Text>
    </Ripple>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
  },
});

export const FlatButton = React.memo(_FlatButton);
