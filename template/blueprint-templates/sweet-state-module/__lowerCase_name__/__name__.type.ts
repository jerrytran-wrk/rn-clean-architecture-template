import {StoreActionApi} from 'react-sweet-state';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {ParamsType} from '@storyboards';

export type {{$name}}ContainerInitialState = {};
export type {{$name}}StoreState = {};
export type {{$name}}State = {};
export type {{$name}}StoreApi = StoreActionApi<{{$name}}State>;

export type {{$name}}NavigationProps = StackNavigationProp<ParamsType, '{{$name}}'>;

export type {{$name}}RouteProp = RouteProp<ParamsType, '{{$name}}'>;

export type {{$name}}Props = {
  navigation: {{$name}}NavigationProps;
  route: {{$name}}RouteProp;
};
