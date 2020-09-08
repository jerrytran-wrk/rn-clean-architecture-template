import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {AuthorizedStoryboardParamList} from '../storyboard/Authorized.storyboard';

const Stack = createStackNavigator<AuthorizedStoryboardParamList>();

export const AuthorizedNavigator: React.FC = () => {
  return <Stack.Navigator headerMode="none"></Stack.Navigator>;
};
