import React from 'react';
import {StyleSheet, Text, TextProps, StyleProp, ViewStyle} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';

export interface RoundedButtonProps extends TextProps {
  containerStyle?: StyleProp<ViewStyle>;
  title?: string;
  onPress?: () => void;
}

const _RoundedButton: React.FC<RoundedButtonProps> = (props) => {
  const {title, onPress} = props;
  return (
    <Ripple
      onPress={onPress}
      style={StyleSheet.flatten([_styles.container, props.containerStyle])}>
      <LinearGradient colors={['#EE4E9B', '#D06767']} style={_styles.linear}>
        <Text style={_styles.title}>{title}</Text>
      </LinearGradient>
    </Ripple>
  );
};

const _styles = StyleSheet.create({
  container: {
    height: 44,
  },
  linear: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontWeight: '600',
  },
});

export const RoundedButton = React.memo(_RoundedButton);
