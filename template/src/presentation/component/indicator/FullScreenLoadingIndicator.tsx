import React from 'react';
import {Modal, ActivityIndicator, View, StyleSheet} from 'react-native';

export interface FullScreenLoadingIndicatorProps {
  visible: boolean;
}

const _FullScreenLoadingIndicator: React.FC<FullScreenLoadingIndicatorProps> = (
  props,
) => {
  return (
    <Modal visible={props.visible} animationType="fade" transparent>
      <View style={_styles.container}>
        <View style={_styles.box}>
          <ActivityIndicator color={'white'} size="large" />
        </View>
      </View>
    </Modal>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(51,51,51,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: 'rgb(39,43,50)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const FullScreenLoadingIndicator = React.memo(
  _FullScreenLoadingIndicator,
);
