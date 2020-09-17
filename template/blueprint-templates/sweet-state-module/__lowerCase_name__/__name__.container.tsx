import React from 'react';

import {createContainer} from 'react-sweet-state';

import {
  {{$name}}StoreState,
  {{$name}}ContainerInitialState,
  {{$name}}Props,
} from './{{$name}}.type';

import { {{$name}}Store, {{$name}}Actions} from './{{$name}}.store';
import { {{$name}}View} from './{{$name}}.view';

export const {{$name}}StoreContainer = createContainer<
  {{$name}}StoreState,
  typeof {{$name}}Actions,
  {{$name}}ContainerInitialState
>({{$name}}Store, {
  onInit: () => ({dispatch}, {}) => {
    dispatch({{$name}}Actions.init());
  },
});

export const {{$name}}: React.FC<{{$name}}Props> = (props) => {
  return (
    <{{$name}}StoreContainer>
      <{{$name}}View {...props} />
    </{{$name}}StoreContainer>
  );
};
