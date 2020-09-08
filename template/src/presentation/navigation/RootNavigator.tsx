import * as React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {AuthorizedNavigator} from './AuthorizedStack';
import {AuthenticationNavigator} from './AuthenticationStack';
import {useSelector, useDispatch} from 'react-redux';
import {RootStoreState, signInLocally} from '@shared-state';

export const RootNavigator: React.FC = () => {
  const isAuthorized = useSelector(
    ({authentication}: RootStoreState): boolean => authentication.isAuthorized,
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(signInLocally());
  }, [dispatch]);

  const renderStack = () => {
    if (isAuthorized) {
      return <AuthorizedNavigator />;
    }
    return <AuthenticationNavigator />;
  };
  return <NavigationContainer>{renderStack()}</NavigationContainer>;
};
