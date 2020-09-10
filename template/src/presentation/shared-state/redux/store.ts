import {createStore, applyMiddleware, Action} from 'redux';
import {BehaviorSubject} from 'rxjs';

import {StoreContainer, RootStoreState} from './types';
import {createReducerManager} from './reducer';
import {createEpicManager} from './epic';
import {configurationEpic, authenticationEpic} from './epics';
import {configurationReducer, authenticationReducer} from './reducers';

export function configureStore(): StoreContainer {
  const reducerManager = createReducerManager({
    authentication: authenticationReducer,
    configuration: configurationReducer,
  });
  const {rootEpic, epicMiddleware, epic$, addEpic} = createEpicManager(
    {},
    authenticationEpic,
    configurationEpic,
  );
  // Create a store with the root reducer function being the one exposed by the manager.

  const action$ = new BehaviorSubject<Action>({type: 'init'});
  const reducer = (
    state: RootStoreState | undefined,
    action: Action<string>,
  ) => {
    action$.next(action);
    return reducerManager.reduce(state, action);
  };
  const store = createStore<RootStoreState, Action<string>, any, any>(
    reducer,
    applyMiddleware(epicMiddleware),
  );
  epicMiddleware.run(rootEpic);

  // Optional: Put the reducer manager on the store so it is easily accessible
  return {
    reducerManager,
    store,
    epic$,
    action$,
    addEpic,
  };
}
