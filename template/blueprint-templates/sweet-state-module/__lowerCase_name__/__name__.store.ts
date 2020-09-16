import {createStore, createHook} from 'react-sweet-state';
import { {{$name}}StoreApi, {{$name}}State, {{$name}}StoreState} from './{{$name}}.type';

export const {{$name}}Actions = {
  init: () => async ({setState}: {{$name}}StoreApi) => {
  },
};

export const INITIAL_STATE: {{$name}}State = {};

export const {{$name}}Store = createStore<{{$name}}StoreState, typeof {{$name}}Actions>({
  initialState: Object.assign({}, INITIAL_STATE),
  actions: {{$name}}Actions,
  name: '{{$name}}Store',
});

export const use{{$name}} = createHook({{$name}}Store, {
  selector: (state): {{$name}}State => {
    return {};
  },
});
