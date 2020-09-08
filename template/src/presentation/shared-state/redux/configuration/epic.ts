import {Epic, combineEpics} from 'redux-observable';
import {of} from 'rxjs';
import {filter, mergeMap} from 'rxjs/operators';

import {ConfigurationEpicActions, setTheme, setThemeSuccess} from './action';

const setThemeEpic$: Epic<ConfigurationEpicActions> = (action$) =>
  action$.pipe(
    filter(setTheme.match),
    mergeMap(() => of(setThemeSuccess())),
  );

export const configurationEpic = combineEpics(setThemeEpic$);
