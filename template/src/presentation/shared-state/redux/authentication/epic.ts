import {Epic, combineEpics} from 'redux-observable';
import {container} from 'tsyringe';

import {of, concat} from 'rxjs';

import {filter, catchError, switchMap, map} from 'rxjs/operators';

import {
  AuthenticationEpicActions,
  signInSuccess,
  signInFailed,
  signIn,
  signInBegin,
  signInLocally,
  signInLocallyFailed,
  signInLocallySuccess,
} from './action';

import {SignInUseCase} from '@domain';

const signInEpic$: Epic<AuthenticationEpicActions> = (action$) =>
  action$.pipe(
    filter(signIn.match),
    switchMap((action) => {
      const useCase = container.resolve<SignInUseCase>('SignInUseCase');
      return concat(
        of(signInBegin()),
        useCase.call(action.payload).pipe(
          map(signInSuccess),
          catchError(() => of(signInFailed())),
        ),
      );
    }),
  );
const signInLocallyEpic$: Epic<AuthenticationEpicActions> = (action$) =>
  action$.pipe(
    filter(signInLocally.match),
    switchMap(() => {
      const useCase = container.resolve<SignInUseCase>('SignInUseCase');
      return useCase.call().pipe(
        map(signInLocallySuccess),
        catchError(() => of(signInLocallyFailed())),
      );
    }),
  );
export const authenticationEpic = combineEpics(signInEpic$, signInLocallyEpic$);
