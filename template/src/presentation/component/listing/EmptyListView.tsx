import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextView} from '../label';
import {LightTheme} from '@resources';

export type EmptyListViewProps = {
  title?: string;
  content?: string;
};

export const EmptyListView: React.FC<EmptyListViewProps> = (props) => {
  return (
    <View style={[styles.container]}>
      <TextView style={styles.title} text={props.title ?? 'Oops!'} />
      <TextView
        style={styles.content}
        text={props.content ?? 'Không có dữ liệu!'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: LightTheme.colorScheme.primary,
  },
  content: {
    fontSize: 8,
  },
});
