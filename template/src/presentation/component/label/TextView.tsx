import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

export interface TextViewProps extends TextProps {
  text?: string;
}

const _TextView: React.FC<TextViewProps> = (props) => {
  return (
    <Text
      {...props}
      style={StyleSheet.flatten([{color: '#4f4f4f'}, props.style])}>
      {props.text}
    </Text>
  );
};

export const TextView = React.memo(_TextView);
