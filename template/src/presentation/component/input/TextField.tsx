import React from 'react';
import {
  View,
  Image,
  ImageSourcePropType,
  TextInputProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {TextView} from '../label';

export interface TextFieldProps {
  containerStyle?: StyleProp<ViewStyle>;

  prefix?: React.ReactNode;
  prefixIcon?: ImageSourcePropType;

  suffix?: React.ReactNode;
  suffixIcon?: ImageSourcePropType;

  errorLabel?: string;

  inputProps?: TextInputProps;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    containerStyle,
    prefix,
    prefixIcon,
    suffix,
    suffixIcon,
    errorLabel,
    inputProps = {},
  } = props;

  const renderPrefix = () => {
    if (prefix) {
      return prefix;
    }
    if (prefixIcon) {
      return <Image source={prefixIcon} />;
    }
    return null;
  };

  const renderSuffix = () => {
    if (suffix) {
      return suffix;
    }
    if (suffixIcon) {
      return <Image source={suffixIcon} />;
    }
    return null;
  };

  return (
    <View style={[_styles.container, containerStyle]}>
      <View style={_styles.content}>
        {renderPrefix()}
        <View style={_styles.padding} />
        <TextInput {...inputProps} style={[_styles.input, inputProps.style]} />
        {renderSuffix()}
      </View>
      <TextView text={errorLabel} />
      <View style={_styles.divider} />
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {},
  divider: {
    height: 1,
    marginTop: 8,
    width: '100%',
    backgroundColor: '#F1F3F8',
  },
  content: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  padding: {width: 16},
});
