import React from 'react';
import {
  StyleSheet,
  Text,
  TextProps,
  View,
  ImageSourcePropType,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface IconLabelProps extends TextProps {
  prefix?: React.ReactNode;
  prefixIcon?: ImageSourcePropType;
  text?: string;

  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const _IconLabel: React.FC<IconLabelProps> = (props) => {
  const {prefixIcon, text, containerStyle, labelStyle, prefix} = props;
  const renderPrefix = () => {
    if (prefix) {
      return prefix;
    }
    if (prefixIcon) {
      return <Image source={prefixIcon} />;
    }
    return null;
  };
  return (
    <View style={[_styles.container, containerStyle]}>
      {renderPrefix()}
      <Text style={[_styles.label, labelStyle]}>{text}</Text>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  label: {
    marginHorizontal: 8,
  },
});

export const IconLabel = React.memo(_IconLabel);
