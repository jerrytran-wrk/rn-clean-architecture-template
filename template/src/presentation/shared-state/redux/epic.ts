import {BehaviorSubject} from 'rxjs';
import {Action} from 'redux';

import {
  combineEpics,
  Epic,
  createEpicMiddleware,
  EpicMiddleware,
} from 'redux-observable';

import {mergeMap, catchError} from 'rxjs/operators';
import {RootEpicDependency, RootEpic, RootStoreState} from './types';

export function createEpicManager(
  dependencies: RootEpicDependency = {},
  ...epics: Epic[]
): {
  rootEpic: RootEpic;
  epicMiddleware: EpicMiddleware<
    Action,
    Action,
    RootStoreState,
    RootEpicDependency
  >;
} {
  const epic$ = new BehaviorSubject(combineEpics(...epics));
  const rootEpic: Epic = (action$, state$) =>
    epic$.pipe(
      mergeMap((epic) =>
        epic(action$, state$, dependencies).pipe(
          catchError((_, source) => source),
        ),
      ),
    );

  const epicMiddleware = createEpicMiddleware<
    Action,
    Action,
    RootStoreState,
    RootEpicDependency
  >();
  return {rootEpic, epicMiddleware};
}
