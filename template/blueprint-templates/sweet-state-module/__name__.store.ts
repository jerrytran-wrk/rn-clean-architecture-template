import {createStore, createHook} from 'react-sweet-state';
import { {{$name}}Actions} from './{{$name}}.action';
import { {{$name}}State, {{$name}}StoreState} from './{{$name}}.type';
import {INITIAL_STATE} from './constants';

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
