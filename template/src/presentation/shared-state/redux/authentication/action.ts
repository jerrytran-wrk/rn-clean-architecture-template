import {Credential} from '@domain';
import {createAction} from '@reduxjs/toolkit';

export const signIn = createAction<Credential>('authentication/singIn');
export const signInBegin = createAction('authentication/signInBegin');
export const signInSuccess = createAction('authentication/signInSuccess');
export const signInFailed = createAction('authentication/signInFailed');

export const signInLocally = createAction('authentication/signInLocally');
export const signInLocallySuccess = createAction(
  'authentication/signInLocallySuccess',
);
export const signInLocallyFailed = createAction(
  'authentication/signInLocallyFailed',
);

export type SignInAction = ReturnType<typeof signIn>;
export type SignInBegin = ReturnType<typeof signInBegin>;
export type SignInSuccess = ReturnType<typeof signInSuccess>;
export type SignInFailed = ReturnType<typeof signInFailed>;

export type SignInLocally = ReturnType<typeof signInLocally>;
export type SignInLocallySuccess = ReturnType<typeof signInLocallySuccess>;
export type SignInLocallyFailed = ReturnType<typeof signInLocallyFailed>;

export type AuthenticationEpicActions =
  | SignInAction
  | SignInBegin
  | SignInSuccess
  | SignInFailed
  | SignInLocally
  | SignInLocallySuccess
  | SignInLocallyFailed;
