import {Reducer, Action, Store} from 'redux';
import {Epic} from 'redux-observable';

import {AuthenticationState} from './authentication';
import {BehaviorSubject} from 'rxjs';
import {ConfigurationState} from './configuration';

export type RootStoreState = {
  authentication: AuthenticationState;
  configuration: ConfigurationState;
};

export type RootEpicDependency = {};

export type RootEpic = Epic<Action, Action, RootStoreState, RootEpicDependency>;

export type ReducerManger = {
  reduce: Reducer<RootStoreState, Action>;
  add(key: string, reducer: Reducer): void;
  remove(key: string): void;
};

export type StoreContainer = {
  store: Store;
  reducerManager: ReducerManger;
  epic$: RootEpic;
  action$: BehaviorSubject<Action>;
};
