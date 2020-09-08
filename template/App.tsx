/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';

import {registerDependencies, registerFlyValue, container} from '@di';
import {RootNavigator} from '@presentation';
import {StoreContainer} from '@shared-state';

registerDependencies();
registerFlyValue();
const App = () => {
  return (
    <Provider store={container.resolve<StoreContainer>('StoreContainer').store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
