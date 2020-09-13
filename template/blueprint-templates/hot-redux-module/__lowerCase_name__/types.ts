import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {ParamsType} from '@storyboards';
import {RootStoreState} from '@shared-state';

export type {{name}}NavigationProps = StackNavigationProp<
  ParamsType,
  '{{name}}'
>;

export type  {{name}}RouteProp = RouteProp<ParamsType, ' {{name}}'>;

export type  {{name}}Props = {
  navigation:  {{name}}NavigationProps;
  route:  {{name}}RouteProp;
};



export type {{name}}State = {

};

export type StoreStateWith{{name}} = RootStoreState & {
  {{name}}?: {{name}}State;
};

export type {{name}}ReduxSelectionState = {{name}}State & {};
