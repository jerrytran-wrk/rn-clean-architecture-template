import React from 'react';
import {} from 'react-native';
// import from library section

// importing from alias section
import {ErrorBoundary, TextView} from '@components';
// importing from local file
import {use{{$name}}, {{$name}}StoreContainer} from './{{$name}}.store';
import { {{$name}}Props } from './{{$name}}.type';
import { {{$name}}Styles } from './{{$name}}.style';

export const {{$name}}View: React.FC<{{$name}}Props> = (props) => {
  const [state, action] = use{{$name}}();
  return (
    <ErrorBoundary>
      <TextView text='{{$name}}'/>
    </ErrorBoundary>
  );
};
