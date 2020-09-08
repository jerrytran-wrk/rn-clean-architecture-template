import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import {TextView, FullScreenLoadingIndicator, RoundedButton} from '@components';
import {useSignIn} from './SignIn.hooks';
import {SignInProps} from './types';

const _SignIn: React.FC<SignInProps> = (props) => {
  const {} = props;
  const onSignInFailed = React.useCallback(() => {
    console.warn('Success');
  }, []);
  const {isAuthenticating, submit} = useSignIn({onSignInFailed});
  return (
    <SafeAreaView>
      <FullScreenLoadingIndicator visible={isAuthenticating} />
      <TextView text="test" />
      <RoundedButton onPress={submit} />
    </SafeAreaView>
  );
};

export const SignIn = React.memo(_SignIn);
