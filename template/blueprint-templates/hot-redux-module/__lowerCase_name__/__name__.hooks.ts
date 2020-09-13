import React from 'react';
import {} from 'react-native';

import {useDispatch, useSelector, Selector} from 'react-redux';
import { {{name}}Slice, INITIAL_STATE} from './{{name}}.slice';
import { {{name}}ReduxSelectionState, StoreStateWith{{name}} } from './types';

export const {{camelCase name}}Selector: Selector<
  StoreStateWith{{name}},
  {{name}}ReduxSelectionState
> = ({ {{name}} = INITIAL_STATE}) => {{name}};

const {
  actions: {},
} = {{name}}Slice;

export function use{{name}}Model() {
  const {} = useSelector<
    StoreStateWith{{name}},
     {{name}}ReduxSelectionState
  >( {{camelCase name}}Selector);
  const dispatch = useDispatch();

  

  return {};
}
