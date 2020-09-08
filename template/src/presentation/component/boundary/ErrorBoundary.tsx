import React from 'react';
import {StyleSheet, Text} from 'react-native';

export interface ErrorBoundaryProps {}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }
  componentDidCatch() {
    this.setState({hasError: true});
  }
  render() {
    const {hasError} = this.state;
    if (hasError) {
      return <Text>Error Fallback</Text>;
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {},
});
