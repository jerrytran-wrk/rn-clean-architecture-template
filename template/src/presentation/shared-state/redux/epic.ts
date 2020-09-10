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
  addEpic: (epic: Epic) => void;
  epic$: BehaviorSubject<Epic>;
  rootEpic: RootEpic;
  epicMiddleware: EpicMiddleware<
    Action,
    Action,
    RootStoreState,
    RootEpicDependency
  >;
} {
  const addedEpics: Epic[] = [];
  const epic$ = new BehaviorSubject(combineEpics(...epics));
  const addEpic = (epic: Epic) => {
    if (addedEpics.includes(epic)) {
      return;
    }
    addedEpics.push(epic);
    epic$.next(epic);
  };
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
  return {epic$, rootEpic, epicMiddleware, addEpic};
}
