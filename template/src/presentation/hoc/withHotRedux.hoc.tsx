import React from 'react';
import {Epic} from 'redux-observable';
import {Reducer} from 'redux';
import {StoreContainer} from '@shared-state';
import {container} from 'tsyringe';

export const withHotRedux = (
  reducerKey: string,
  reducer: Reducer,
  epic: Epic,
) => (Component: React.FC<any> | React.ComponentType): React.ComponentType => {
  return class WithHotRedux extends React.PureComponent {
    constructor(props: any) {
      super(props);
      const {reducerManager, addEpic} = container.resolve<StoreContainer>(
        'StoreContainer',
      );
      reducerManager.add(reducerKey, reducer);
      addEpic(epic);
    }
    render() {
      return <Component {...this.props} />;
    }
  };
};
