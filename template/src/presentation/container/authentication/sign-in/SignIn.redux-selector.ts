import {Selector} from 'react-redux';
import {RootStoreState} from '@shared-state';
import {SignInReduxSelectionState} from './types';

export const signInSelector: Selector<
  RootStoreState,
  SignInReduxSelectionState
> = (state) => {
  return {
    isAuthenticating: state.authentication.isAuthenticating,
  };
};
